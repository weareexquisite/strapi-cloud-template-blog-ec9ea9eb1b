'use strict';

/**
 * Site Content validation (DAVID-14). Strapi cannot enforce uniqueness
 * inside a repeatable component, and a block that names a figure that does
 * not exist would quietly fall back on the page - so both fail loudly at
 * write time instead, with the offending key in the message:
 *
 *   - figure keys unique within figures; block keys unique within blocks
 *   - every {fig:KEY} / {period:KEY} token in a block names a figure that
 *     exists in the same write
 *
 * Only checked when the write carries both lists (the admin form and a
 * full PUT always do); a partial update touching neither passes through.
 */

const { ValidationError } = require('@strapi/utils').errors;

function dupes(list) {
  const seen = new Set();
  const out = new Set();
  for (const item of list || []) {
    const k = item && typeof item.key === 'string' ? item.key.trim() : '';
    if (k === '') continue;
    if (seen.has(k)) out.add(k);
    seen.add(k);
  }
  return [...out];
}

function validate(data) {
  if (!data || (data.figures === undefined && data.blocks === undefined)) return;
  const figures = Array.isArray(data.figures) ? data.figures : null;
  const blocks = Array.isArray(data.blocks) ? data.blocks : null;

  if (figures) {
    const d = dupes(figures);
    if (d.length) throw new ValidationError(`figures: duplicate key(s): ${d.join(', ')}`);
  }
  if (blocks) {
    const d = dupes(blocks);
    if (d.length) throw new ValidationError(`blocks: duplicate key(s): ${d.join(', ')}`);
  }
  if (figures && blocks) {
    const known = new Set(figures.map((f) => (f && f.key ? String(f.key).trim() : '')));
    const missing = [];
    for (const b of blocks) {
      const text = b && typeof b.text === 'string' ? b.text : '';
      for (const m of text.matchAll(/\{(fig|period):([a-z0-9_]+)\}/g)) {
        if (!known.has(m[2])) missing.push(`${b.key} -> ${m[0]}`);
      }
    }
    if (missing.length) {
      throw new ValidationError(`blocks: token(s) name a figure that does not exist: ${missing.join('; ')}`);
    }
  }
}

module.exports = {
  beforeCreate(event) { validate(event.params.data); },
  beforeUpdate(event) { validate(event.params.data); },
};
