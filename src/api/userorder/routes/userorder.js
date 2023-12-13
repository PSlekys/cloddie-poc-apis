module.exports = {
  routes: [
    {
      method: "GET",
      path: "/userorder",
      handler: "userorder.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
