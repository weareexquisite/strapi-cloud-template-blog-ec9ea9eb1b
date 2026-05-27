'use strict';
/**
 * global-setting service — default CRUD service from the core factory.
 */
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::global-setting.global-setting');
