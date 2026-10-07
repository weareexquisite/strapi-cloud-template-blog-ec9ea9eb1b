'use strict';
/**
 * redirect service — default from the core factory (DAVID-14).
 */
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::redirect.redirect');
