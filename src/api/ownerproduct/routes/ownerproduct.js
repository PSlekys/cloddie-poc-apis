module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ownerproduct",
      handler: "ownerproduct.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
