'use strict';
/**
 * credit-card controller — default CRUD controller from the core factory.
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::credit-card.credit-card');
