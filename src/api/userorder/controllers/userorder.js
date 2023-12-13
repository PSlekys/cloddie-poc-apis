"use strict";
const { sanitize, validate } = require("@strapi/utils");

/**
 * A set of functions called "actions" for `userproduct`
 */

module.exports = {
  async find(ctx) {
    try {
      const { user } = ctx.state; // Access the authenticated user

      const contentType = strapi.contentType("api::order.order");
      await validate.contentAPI.query(ctx.query, contentType, {
        auth: ctx.state.auth,
      });

      const entities = await strapi.entityService.findMany("api::order.order", {
        filters: {
          renter: {
            id: user.id,
          },
        },
        populate: {
          product: {
            fields: ["name"],
            populate: {
              image: true,
            },
          },
        },
      });

      return await sanitize.contentAPI.output(entities, contentType, {
        auth: ctx.state.auth,
      });
    } catch (err) {
      ctx.body = err;
    }
  },
};
