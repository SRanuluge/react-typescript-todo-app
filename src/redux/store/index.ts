import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { loadState, saveState } from "../../persist/LocalStorage";
import { throttle } from 'lodash';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

//data persist with localstorage
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
export type rootStore = ReturnType<typeof rootReducer>;
export default store;
