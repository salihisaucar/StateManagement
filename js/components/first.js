var BaseComponent = require("../lib/base-component");
module.exports = class FirstComponent extends (
  BaseComponent
) {
  constructor(store) {
    super();
    this.subscribe(this);
    this.store = store;
  }

  result = {};

  mapStateToProps(state) {
    console.log("mapStateToProps was run");
    this.result = state;
    console.log(this.result);
  }

  write() {
    console.log(this.result);
  }

  changeStore() {
    console.log("changeStore was run");
    this.store.dispatch("UPDATE_STATE", "store güncellendi");
  }
};
