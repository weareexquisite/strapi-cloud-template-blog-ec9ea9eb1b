'use strict';
/**
 * global-setting controller — default CRUD controller from the core factory.
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::global-setting.global-setting');
