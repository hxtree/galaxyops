module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '5.6.0',
      skipMD5: true,
    },
    instance: {},
    autoStart: false,
  },
  mongoURLEnvName: 'MONGO_DATABASE_URI',
};
