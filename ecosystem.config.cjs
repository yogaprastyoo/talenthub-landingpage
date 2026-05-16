module.exports = {
  apps: [
    {
      name: "talenthub-landing",
      script: "node_modules/.bin/serve",
      args: "dist --single --listen 8080",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
