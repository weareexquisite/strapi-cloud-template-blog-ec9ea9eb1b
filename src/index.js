'use strict';
const bootstrap = require("./bootstrap");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // DAVID-14: site-content keys must be unique and block tokens must name
    // real figures. A document middleware, not a lifecycle, because only the
    // document layer sees repeatable-component contents - see validate.js.
    const { validate } = require('./api/site-content/validate');
    strapi.documents.use(async (context, next) => {
      if (context.uid === 'api::site-content.site-content'
          && (context.action === 'create' || context.action === 'update')) {
        validate(context.params && context.params.data);
      }
      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap,
};
