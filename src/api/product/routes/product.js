"use strict";

/**
 * product router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::product.product", {
  config: {
    create: {
      middlewares: [
        async (ctx, next) => {
          const userId = ctx.state.user.id;
          ctx.request.body.owner = userId;
          return await next();
        },
      ],
    },
  },
});
