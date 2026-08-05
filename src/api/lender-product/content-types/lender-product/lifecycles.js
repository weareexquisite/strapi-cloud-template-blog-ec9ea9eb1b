'use strict';

/**
 * DATA-06 completeness gate (Master Doc Section 5).
 *
 * A product missing any match-critical field still exists (the lender keeps a
 * profile page) but carries is_complete=false, and every matching surface
 * (qualifiers, eligibility checkers, computed intros, agent API) filters on
 * is_complete=true. completeness_missing lists the gaps so admin doubles as
 * the data-completion worksheet.
 *
 * Match-critical fields (Section 5 table):
 *   common    product_type, amount_min, amount_max, rate_min, rate_type,
 *             provinces_served (non-empty), funding_speed_hours,
 *             rates_last_reviewed
 *   business  min_monthly_revenue, min_time_in_business_months
 *   personal  min_income_monthly, min_credit_band, income_types_accepted
 *
 * rate_max is deliberately NOT required: floor-only pricing ("from 7.99%") is
 * a legitimate published position; blending is prevented by rate_type, not by
 * forcing a ceiling.
 */

const COMMON = ['product_type', 'amount_min', 'amount_max', 'rate_min',
  'rate_type', 'funding_speed_hours', 'rates_last_reviewed'];
const BUSINESS = ['min_monthly_revenue', 'min_time_in_business_months'];
const PERSONAL = ['min_income_monthly', 'min_credit_band'];

function missingFields(record) {
  const missing = [];
  for (const f of COMMON) {
    if (record[f] === null || record[f] === undefined || record[f] === '') missing.push(f);
  }
  const provinces = record.provinces_served;
  if (!Array.isArray(provinces) || provinces.length === 0) missing.push('provinces_served');

  if (record.audience === 'business') {
    for (const f of BUSINESS) {
      if (record[f] === null || record[f] === undefined) missing.push(f);
    }
  } else if (record.audience === 'personal') {
    for (const f of PERSONAL) {
      if (record[f] === null || record[f] === undefined || record[f] === '') missing.push(f);
    }
    const types = record.income_types_accepted;
    if (!Array.isArray(types) || types.length === 0) missing.push('income_types_accepted');
  } else {
    missing.push('audience');
  }
  return missing;
}

async function stampCompleteness(event) {
  const { data, where } = event.params;
  if (!data) return;

  // Updates arrive partial: merge over the stored record so untouched
  // match-critical fields still count toward completeness.
  let base = {};
  if (where && (where.id || where.documentId)) {
    const existing = await strapi.db.query('api::lender-product.lender-product')
      .findOne({ where });
    if (existing) base = existing;
  }
  const merged = { ...base, ...data };
  const missing = missingFields(merged);
  data.is_complete = missing.length === 0;
  data.completeness_missing = missing;
}

module.exports = {
  beforeCreate: stampCompleteness,
  beforeUpdate: stampCompleteness,
};
