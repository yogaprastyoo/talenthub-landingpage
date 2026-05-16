module.exports = {
  apps: [
    {
      name: "talenthub-landing",
      script: "node_modules/.bin/serve",
      args: "dist --single -l 8080",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
