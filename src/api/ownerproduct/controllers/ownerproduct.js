"use strict";
const { sanitize, validate } = require("@strapi/utils");

/**
 * A set of functions called "actions" for `userproduct`
 */

module.exports = {
  async find(ctx) {
    try {
      const { user } = ctx.state; // Access the authenticated user

      const contentType = strapi.contentType("api::product.product");
      await validate.contentAPI.query(ctx.query, contentType, {
        auth: ctx.state.auth,
      });

      const entities = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: {
            owner: {
              id: user.id,
            },
          },
          populate: ["orders", "image"],
        }
      );

      return await sanitize.contentAPI.output(entities, contentType, {
        auth: ctx.state.auth,
      });
    } catch (err) {
      ctx.body = err;
    }
  },
};
