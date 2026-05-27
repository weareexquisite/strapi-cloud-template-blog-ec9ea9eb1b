'use strict';
/**
 * credit-card service — default CRUD service from the core factory.
 */
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::credit-card.credit-card');
