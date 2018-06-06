import { decorate, observable, computed, action } from "mobx";

var Appstore = observable({
	tab : 0,
});

Appstore.setTab = action(function reset(value) {
	Appstore.tab = value;
});



export default Appstore;