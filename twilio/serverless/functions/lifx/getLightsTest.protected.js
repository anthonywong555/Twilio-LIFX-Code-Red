const lifx = require('ya-lifx');

exports.handler = async function(context, event, callback) {
  try {
    lifx.init(context.LIFX_TOKEN);
    const lights = await lifx.listLights();
    callback(null, lights);
  } catch (e) {
    callback(formatErrorMsg(context, 'exports.handler', e));
  }
};

const formatErrorMsg = (context, functionName, errorMsg) => {
  return `
    Twilio Function Path: ${context.PATH}\n
    Function Name: ${functionName}\n 
    Error Message: ${errorMsg}
  `;
}