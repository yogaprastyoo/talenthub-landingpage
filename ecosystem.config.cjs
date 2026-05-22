module.exports = {
  apps: [
    {
      name: "talenthub-landing",
      script: "node_modules/.bin/serve",
      args: "dist --listen 8080 --no-clipboard --no-port-switching",
      interpreter: "none",
      cwd: __dirname,

      // Process behavior
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: "30s",
      restart_delay: 3000,
      kill_timeout: 5000,

      // Memory safety
      max_memory_restart: "300M",

      // Environment
      env: {
        NODE_ENV: "production",
      },

      // Logs
      time: true,
      merge_logs: true,
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
