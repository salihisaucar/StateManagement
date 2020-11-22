const actionTypes = require("../store/actionTypes");
const actions = require("../store/actions");

module.exports = function reducer(action, payload) {
  console.log("reducer was run " + action);
  switch (action) {
    case actionTypes.UPDATE_STATE:
      return actions.updateStore(payload);
    default:
      return {};
  }
};
