function changeStamp({ connection }) {
  return {
    timestamp: new Date(),
    user: {
      name: connection?.user?.profile?.name ?? connection?.user?.name,
      user_id: connection?.user?.id ?? 'anonymous_user',
    },
  };
}

export default changeStamp;
