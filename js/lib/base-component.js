var StorePublisher = require("./publisher-subscriber");

class BaseComponent {
  constructor() {
    this.sp = new StorePublisher();
  }

  subscribe(obj) {
    this.sp.subscribe(obj);
  }
}

module.exports = BaseComponent;
