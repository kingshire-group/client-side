/**
 * Routes file to backend endpoints, always fnish routes with out slash symbol
 */

const microServiceBases = {
  userService: '/user-service',
};

const bases = {
  user: `${microServiceBases.userService}/user`,
};

const user = {
  login: `${bases.user}/login`,
  signup: `${bases.user}/signup`,
  getAccount: `${bases.user}/account`,
  activateAccount: `${bases.user}/activate-account`,
  updateAccount: `${bases.user}/update-account`,
  forgetPassword: `${bases.user}/forget-password`,
};

const routes = {
  user,
};

export default routes;
