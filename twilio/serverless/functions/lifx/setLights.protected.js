const lifx = require('ya-lifx');

exports.handler = async (context, event, callback) => {
  try {
    lifx.init(context.LIFX_TOKEN);
    const result = await setLightsState(context, null, null);
    callback(null, result);
  } catch (e) {
    callback(e);
  }
};

const setLightsState = async (context, lights, color) => {
  try {
    switch(context.LIFX_EFFECT) {
      case 'breathe':
        return await lifx.breathe('all', {
          "power_on": "on",
          "color": "blue",
          "from_color": "",
          "period": 0.5,
          "cycles": 5,
          "persist": false,
          "peak": 0.0
        });
      case 'pluse':
        return await lifx.pulse('all', {
          "power_on": "on",
          "color": "red",
          "from_color": "",
          "period": 2,
          "cycles": 5,
          "persist": false,
        });
      default:
        return await lifx.setState('all', {
          "power": "on",
          "color": "green saturation:0.5",
          "brightness": 0.5,
          "duration": 5,
          "infrared": 0,
          "fast": false
        });
    }
  } catch(e) {
    throw formatErrorMsg(context, 'setLightsState', e);
  }
}

const formatErrorMsg = (context, functionName, errorMsg) => {
  return `
    Twilio Function Path: ${context.PATH}\n
    Function Name: ${functionName}\n 
    Error Message: ${errorMsg}
  `;
}