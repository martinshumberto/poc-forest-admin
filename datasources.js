/**
 * @returns {Record<string, { connectionOptions: (import('@forestadmin/datasource-sql').ConnectionOptions | import('@forestadmin/datasource-mongo').ConnectionParams); datasourceSuffix?: string; }>}
 */
module.exports = () => ({
  main: {
    connectionOptions: {
      uri: `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
    },
  },
});
