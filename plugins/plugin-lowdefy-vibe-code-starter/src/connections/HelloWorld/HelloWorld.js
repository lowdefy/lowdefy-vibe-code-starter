import getMongoDB from '../lib/getMongoDB.js';
import requestWrapper from '../lib/requestWrapper.js';
import createHelloWorld from './createHelloWorld.js';

async function HelloWorld({ request, connection }) {
  const { text, user_id } = request;

  await getMongoDB({ connection });

  const helloWordText = await createHelloWorld({ connection, text, user_id });

  return {
    response: { success: true, text: helloWordText },
    logMetaData: {
      result: 'success',
    },
    type: 'hello_world',
  };
}

HelloWorld.schema = {};
HelloWorld.meta = {
  checkRead: false,
  checkWrite: false,
};

export default requestWrapper(HelloWorld);
