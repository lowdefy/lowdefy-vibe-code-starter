import getMongoDB from './getMongoDB.js';

async function logCallResponse({ logId, logMetaData, connection, type }) {
  await getMongoDB({ connection });

  await connection.mdbClient.collection('log-usage').updateOne(
    { _id: logId },
    {
      $set: {
        'metadata.response': logMetaData,
        'metadata.completed_timestamp': new Date(),
        'metadata.type': type,
      },
    }
  );
}

export default logCallResponse;
