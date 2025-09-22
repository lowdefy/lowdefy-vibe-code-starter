import getMrmMongoDB from './getMongoDB.js';

async function logCallError({ logId, error, connection }) {
  await getMrmMongoDB({ connection });

  await connection.mdbClient.collection('log-usage').updateOne(
    { _id: logId },
    {
      $set: {
        'metadata.response': error.cause?.logMetaData,
        'metadata.completed_timestamp': new Date(),
        'metadata.type': error.cause?.type,
        'metadata.error.name': error.name,
        'metadata.error.message': error.message,
      },
    }
  );
}

export default logCallError;
