'use strict';
/**
 * site-content router — default from the core factory (DAVID-14).
 */
const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = createCoreRouter('api::site-content.site-content');
