'use strict';
/**
 * homepage controller — default CRUD controller from the core factory.
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::homepage.homepage');
