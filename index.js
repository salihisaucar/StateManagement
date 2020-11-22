var Store = require("./js/store/store");
var reducer = require("./js/store/reducer");
var firstCom = require("./js/components/first");
var SecondCom = require("./js/components/second");

function createStore() {
  var store = new Store({
    reducer: reducer,
  });

  var cmp = new firstCom(store);
  var cmp2 = new SecondCom(store);
  cmp.write();
  cmp.changeStore();

  cmp2.changeStore();
}

createStore();
