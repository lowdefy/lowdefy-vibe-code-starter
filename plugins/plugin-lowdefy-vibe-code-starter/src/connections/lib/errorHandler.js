import axios from 'axios';

function errorHandler(requestFn) {
  async function withErrorHandler({ request, connection }) {
    try {
      return await requestFn({ request, connection });
    } catch (error) {
      await axios({
        url: 'https://discord.com/api/webhooks/',
        method: 'post',
        data: {
          content: `${error.name}: ${error.message} - ${connection.user?.name}`,
        },
      });
      throw error;
    }
  }

  withErrorHandler.schema = requestFn.schema;
  withErrorHandler.meta = requestFn.meta;

  return withErrorHandler;
}

export default errorHandler;
