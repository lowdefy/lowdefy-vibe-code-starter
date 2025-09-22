import { MongoClient } from 'mongodb';

async function getMongoDB({ connection }) {
  if (connection.mdbClient) {
    return;
  }
  const { databaseUri } = connection;
  let client = { close: () => {} };
  try {
    client = new MongoClient(databaseUri);
    await client.connect();
    connection.mdbClient = client.db();
  } catch (error) {
    await client.close();
    throw error;
  }
}

export default getMongoDB;
