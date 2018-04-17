function delayedResponse(event) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
        }),
      };

      resolve(response);
    }, 500)
  });
}

module.exports.hello = async (event, context) => {
  return await delayedResponse(event);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
