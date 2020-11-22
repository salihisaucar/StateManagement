var StorePublisher = require("../lib/publisher-subscriber");

module.exports = class Store {
  constructor(params) {
    let self = this;
    self.reducer = {};

    if (!self.reducer.hasOwnProperty("reducer")) {
      self.reducer = params.reducer;
    }

    self.state = {};
    self.publisher = new StorePublisher(self.state);
  }

  dispatch(action, payload) {
    console.log("dispatch was run");
    if (typeof this.reducer == "function") {
      this.state = this.reducer(action, payload);
      this.publisher.publish(this.state);
    }
  }
};
