module.exports = {
  /**
   * DO NOT EDIT! Ansible managed!
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
      {
          name : 'Etc-explorer',
          script : 'app.js',
          env: {
              MONGO_URI: 'mongodb://mongodb/cloexplorer',
              PORT: 3001
          },
          env_production : {
              NODE_ENV: 'production'
          }
      },
      {
          name : 'Etc-sync',
          script : 'tools/sync.js',
          env: {
              MONGO_URI: 'mongodb://mongodb/cloexplorer',
          },
          env_production : {
              NODE_ENV: 'production'
          }
      }
  ]
};
