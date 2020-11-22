const observers = require("../lib/observer-array");

module.exports = class StorePublisher {
  constructor() {}

  subscribe(subscriber) {
    if (observers.indexOf(subscriber) == -1) {
      observers.push(subscriber);
    }
  }

  publish(state) {
    console.log("publish was run");
    for (var i = 0; i < observers.length; i++) {
      observers[i].mapStateToProps(state);
    }
  }
};
