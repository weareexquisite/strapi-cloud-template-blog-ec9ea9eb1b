'use strict';

/**
 * Shape validation for the eligibility JSON fields (Vlad, 25 Aug).
 *
 * The four fields added for the eligibility module are untyped JSON, so
 * Strapi accepted any shape with a 200 and a malformed write failed
 * SILENTLY at render (the module suppresses what it cannot read). These
 * checks make a malformed write fail loudly at write time instead:
 *
 *   eligibility_criteria  [{ label: string, value: string }]
 *   documents_required    [string]
 *   exclusions            [{ heading?: string, body: string }]
 *
 * Only the submitted fields are checked - a partial update that does not
 * touch these fields passes through untouched. null clears a field and is
 * always valid.
 */

const { ValidationError } = require('@strapi/utils').errors;

function fail(field, why) {
  throw new ValidationError(`${field}: ${why}`);
}

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim() !== '';
}

function validateEligibility(data) {
  if ('eligibility_criteria' in data && data.eligibility_criteria !== null) {
    const v = data.eligibility_criteria;
    if (!Array.isArray(v)) fail('eligibility_criteria', 'must be an array of { label, value }');
    v.forEach((row, i) => {
      if (!row || typeof row !== 'object' || Array.isArray(row)) {
        fail('eligibility_criteria', `item ${i} must be an object with label and value`);
      }
      if (!isNonEmptyString(row.label)) fail('eligibility_criteria', `item ${i}: label must be a non-empty string`);
      if (!isNonEmptyString(row.value)) fail('eligibility_criteria', `item ${i}: value must be a non-empty string`);
      const extra = Object.keys(row).filter((k) => !['label', 'value'].includes(k));
      if (extra.length) fail('eligibility_criteria', `item ${i}: unexpected key(s) ${extra.join(', ')}`);
    });
  }
  if ('documents_required' in data && data.documents_required !== null) {
    const v = data.documents_required;
    if (!Array.isArray(v)) fail('documents_required', 'must be an array of strings');
    v.forEach((row, i) => {
      if (!isNonEmptyString(row)) fail('documents_required', `item ${i} must be a non-empty string`);
    });
  }
  if ('exclusions' in data && data.exclusions !== null) {
    const v = data.exclusions;
    if (!Array.isArray(v)) fail('exclusions', 'must be an array of { heading, body }');
    v.forEach((row, i) => {
      if (!row || typeof row !== 'object' || Array.isArray(row)) {
        fail('exclusions', `item ${i} must be an object with body (and optional heading)`);
      }
      if (!isNonEmptyString(row.body)) fail('exclusions', `item ${i}: body must be a non-empty string`);
      if ('heading' in row && row.heading !== null && typeof row.heading !== 'string') {
        fail('exclusions', `item ${i}: heading must be a string when present`);
      }
      const extra = Object.keys(row).filter((k) => !['heading', 'body'].includes(k));
      if (extra.length) fail('exclusions', `item ${i}: unexpected key(s) ${extra.join(', ')}`);
    });
  }
}

module.exports = {
  beforeCreate(event) {
    if (event.params.data) validateEligibility(event.params.data);
  },
  beforeUpdate(event) {
    if (event.params.data) validateEligibility(event.params.data);
  },
};
