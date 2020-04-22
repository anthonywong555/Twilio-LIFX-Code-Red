exports.handler = async (context, event, callback) => {
  try {
    const twilioClient = require('twilio')(context.ACCOUNT_SID, context.AUTH_TOKEN);
    const { userCode } = event;

    const result = await validateUserCode(context, twilioClient, userCode);
    return result;
  } catch(e) {
    callback(e);
  }
};

const validateUserCode = async (context, twilioClient, userCode) => {
  try {
    
  } catch(e) {
    throw formatErrorMsg(context, 'validateUserCode', e);
  }
}

const formatErrorMsg = (context, functionName, errorMsg) => {
  return `
    Twilio Function Path: ${context.PATH}\n
    Function Name: ${functionName}\n 
    Error Message: ${errorMsg}
  `;
}