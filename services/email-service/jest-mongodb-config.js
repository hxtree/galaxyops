module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '6.0.0',
      skipMD5: true,
    },
    instance: {},
    autoStart: false,
  },
  mongoURLEnvName: 'MONGO_DATABASE_URI',
};
