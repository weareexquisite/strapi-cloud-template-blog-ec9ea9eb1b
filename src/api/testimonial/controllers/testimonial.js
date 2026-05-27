'use strict';
/**
 * testimonial controller — default CRUD controller from the core factory.
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::testimonial.testimonial');
