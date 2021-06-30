const FAILURE_STATUS = "FAILURE";
const SUCCESS_STATUS = "OK";

exports.sendingMailError_0003 = (options) => ({
  status: FAILURE_STATUS,
  errors: {
    error: {
      message: "Error when sending confirmation mail",
      code: "0003",
    },
  },
});

exports.createConfirmationTokenError_0004 = (options) => ({
    status: FAILURE_STATUS,
    errors: {
      error: {
        label: "error when creating a confirmation token",
        code: "0004",
      },
    },
  }
);


exports.mailSentSuccess_0005 = (options) => ({
    status: SUCCESS_STATUS,
    errors: {
      error: {
        label: "we sent a confirmation email to your email address, please user it to access to the platform",
        code: "0006",
      },
    },
    confirmationUrl: "localhost:3000" + "/confirmation-device?token=" + options.confirmationToken.get("confirmation_token"),
    redirect: "/info-page",
  }
);

exports.confirmationMailSentSuccess_0006 = (options) => ({
  status: SUCCESS_STATUS,
  errors: {
    error: {
      label: "A confirmation mail is already sent, please check it first",
      code: "0006",
    },
  },
  redirect: "/info-page",
});

exports.gettingPersonalInfoError_0007 = (options) => ({
  status: FAILURE_STATUS,
  errors: {
    error: {
      label: "Cannot get your personal information",
      code: "0007",
    },
  },
});

exports.frozenAccessTokenError_0008 = () => ({
  status: FAILURE_STATUS,
  errors: {
    error: {
      label: "Your device is frozen, to reactivate it please contact your administrator",
      code: "0008",
    },
  },
});

exports.unAuthorizedError_0009 = () => ({
  status: FAILURE_STATUS,
  errors: {
    error: {
      label: "unauthorized use of auth token",
      code: "0009",
    },
  },
});

exports.expiredConfirmationTokenError_00010 = () => ({
  status: FAILURE_STATUS,
  errors: {
    error: {
      label: "Expired confirmation Token",
      code: "00010",
    },
  },
});

exports.alreadyUsedConfirmationToken_00011 = () => ({
  status: FAILURE_STATUS,
  errors: {
    error: {
      label: "Confirmation was already used",
      code: "00011",
    },
  },
});

exports.subscriptionSuccess_00012 = () => ({
  status: SUCCESS_STATUS,
  errors: {
    error: {
      label: "Successfully subscribed",
      code: "00012",
    },
  },
});

exports.missingParametersError_00012 = (parameters) => ({
  status: SUCCESS_STATUS,
  errors: {
    error: {
      label: `Missing parameters (${parameters})`,
      code: "00012",
    },
  },
});