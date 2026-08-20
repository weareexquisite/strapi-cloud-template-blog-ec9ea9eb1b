'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::action-log.action-log');
