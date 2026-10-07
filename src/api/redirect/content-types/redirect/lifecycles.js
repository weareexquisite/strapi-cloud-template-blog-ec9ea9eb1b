'use strict';

/**
 * Redirect validation (DAVID-14). The frontend serves these before any page
 * resolves, so a malformed row could break real URLs - reject it at write
 * time instead:
 *
 *   from  a site path: starts with "/", no scheme, host, query or fragment
 *   to    a site path or an absolute http(s) URL
 *   from != to (a redirect to itself loops)
 *
 * The frontend matches paths with or without a trailing slash, so
 * "/foo" and "/foo/" are the same rule.
 */

const { ValidationError } = require('@strapi/utils').errors;

function norm(p) {
  return String(p || '').trim().replace(/\/+$/, '') || '/';
}

function validate(data) {
  if (!data) return;
  if (data.from !== undefined) {
    const from = String(data.from || '').trim();
    if (!/^\/(?!\/)[^?#\s]*$/.test(from)) {
      throw new ValidationError(`from: must be a site path starting with "/" (no domain, query or #fragment): "${from}"`);
    }
  }
  if (data.to !== undefined) {
    const to = String(data.to || '').trim();
    if (!/^\/(?!\/)\S*$/.test(to) && !/^https?:\/\/\S+$/.test(to)) {
      throw new ValidationError(`to: must be a site path starting with "/" or a full http(s) URL: "${to}"`);
    }
  }
  if (data.from !== undefined && data.to !== undefined && norm(data.from) === norm(data.to)) {
    throw new ValidationError(`to: redirects to itself ("${data.from}")`);
  }
}

module.exports = {
  beforeCreate(event) { validate(event.params.data); },
  beforeUpdate(event) { validate(event.params.data); },
};
