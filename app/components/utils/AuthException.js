const AuthResultStatus = {
  invalidEmail: 'Your email address appears to be malformed.',
  wrongPassword: "Wrong Password",
  userNotFound: "User with this email doesn't exist.",
  userDisabled: "User with this email has been disabled.",
  tooManyRequests: "Too many requests. Try again later.",
  operationNotAllowed: "Signing in with Email and Password is not enabled.",
  emailAlreadyExists: "The email has already been registered. Please login or reset your password.",
  emailNotRegistered: "User with this email not found. Please register first",
  invalidActionCode: 'Link got expired',
  default: "An undefined Error happened.",
  undefined: "Something bad Happened. Please Try again"
}


export function handleException(e) {
  let status;
  switch (e.code) {
    case "auth/invalid-email":
      status = AuthResultStatus.invalidEmail;
      break;
    case "auth/invalid-password":
      status = e.message;
      break;
    case "auth/email-not-found":
      status = AuthResultStatus.emailNotRegistered;
      break;
    case "auth/wrong-password":
      status = AuthResultStatus.wrongPassword;
      break;
    case "auth/user-not-found":
      status = AuthResultStatus.userNotFound;
      break;
    case "auth/user-disabled":
      status = AuthResultStatus.userDisabled;
      break;
    case "ERROR_TOO_MANY_REQUESTS":
      status = AuthResultStatus.tooManyRequests;
      break;
    case "ERROR_OPERATION_NOT_ALLOWED":
      status = AuthResultStatus.operationNotAllowed;
      break;
    case "already-exists":
      status = AuthResultStatus.emailAlreadyExists;
      break;
    case "auth/email-already-exists":
      status = AuthResultStatus.emailAlreadyExists;
      break;
    case "auth/invalid-action-code":
      status = AuthResultStatus.invalidActionCode;
      break;
    default:
      status = AuthResultStatus.undefined;
  }
  return status;
}