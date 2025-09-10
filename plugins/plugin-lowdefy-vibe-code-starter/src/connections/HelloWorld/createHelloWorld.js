async function createHelloWorld({ connection, text, user_id }) {
  const user = await connection.mdbClient.collection('user_contacts').findOne({ _id: user_id });

  return `Hello World from ${user.profile.name}: ${text}`;
}

export default createHelloWorld;
