'use strict';
/**
 * site-content controller — default from the core factory (DAVID-14).
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::site-content.site-content');
