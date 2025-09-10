import axios from 'axios';
import logCallError from './logCallError.js';
import logCallResponse from './logCallResponse.js';
import logCallRequest from './logCallRequest.js';

function requestWrapper(requestFn) {
  async function withRequestWrapper({ blockId, connection, pageId, payload, request, requestId }) {
    let logId;
    try {
      const inserted = await logCallRequest({
        blockId,
        connection,
        pageId,
        request,
        requestId,
        payload,
        type: requestFn.name,
      });
      logId = inserted.insertedId;
      const { response, logMetaData, type } = await requestFn({ request, connection });

      await logCallResponse({ logId, logMetaData, type, connection });

      if (connection.mdbClient) {
        try {
          await connection.mdbClient.close();
        } catch (e) {
          //
        }
      }

      return response;
    } catch (error) {
      console.log(error);

      if (logId) {
        try {
          await logCallError({ logId, error, connection });
        } catch (error) {
          // do nothing
        }
      }

      if (connection.discordWebhook) {
        await axios({
          url: connection.discordWebhook,
          method: 'post',
          data: {
            content: `${error.name}: ${error.message} - ${connection.user?.name}`,
          },
        });
      }

      if (connection.mdbClient) {
        try {
          await connection.mdbClient.close();
        } catch (e) {
          //
        }
      }
      throw error;
    }
  }

  withRequestWrapper.schema = requestFn.schema;
  withRequestWrapper.meta = requestFn.meta;

  return withRequestWrapper;
}

export default requestWrapper;
