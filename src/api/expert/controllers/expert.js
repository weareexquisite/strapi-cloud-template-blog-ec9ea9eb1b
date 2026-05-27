'use strict';
/**
 * expert controller — default CRUD controller from the core factory.
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::expert.expert');
