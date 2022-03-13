exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "s"
      })
    };
};