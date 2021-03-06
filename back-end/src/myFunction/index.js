const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

exports.handler = async (event, context) => {
  const randomInt = getRandomInt(100);

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from Lambda. Random number: ${randomInt}`),
  };

  return response;
};
