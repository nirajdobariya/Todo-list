import rootReduser from "./reducer";

import { createStore } from "redux";

const store = createStore(rootReduser , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;