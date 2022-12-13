'use strict';

/**
 * outstanding-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::outstanding-project.outstanding-project');
