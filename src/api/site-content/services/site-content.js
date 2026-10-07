'use strict';
/**
 * site-content service — default from the core factory (DAVID-14).
 */
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::site-content.site-content');
