import changeStamp from './changeStamp.js';
import getMongoDB from './getMongoDB.js';

async function logCallRequest({ blockId, connection, pageId, request, requestId, payload, type }) {
  await getMongoDB({ connection });

  return connection.mdbClient.collection('log-usage').insertOne({
    ...changeStamp({ connection }),
    session_id: connection?.user?.session_id,
    type,
    block_id: blockId,
    page_id: pageId,
    request_id: requestId,
    metadata: {
      payload,
      request,
    },
  });
}

export default logCallRequest;
