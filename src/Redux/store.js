import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";

  import { reducer } from "./reducer"
  
  
  
  export const store = createStore(
    reducer,
    
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
  store.subscribe(() => console.log(store.getState()));