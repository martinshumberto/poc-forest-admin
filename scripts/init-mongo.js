db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  roles: [{ role: "readWrite", db: process.env.MONGO_INITDB_DATABASE }],
});

print(
  `Database "${process.env.MONGO_INITDB_DATABASE}" and user "${process.env.MONGO_INITDB_ROOT_USERNAME}" created.`
);
