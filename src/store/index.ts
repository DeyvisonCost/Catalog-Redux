import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

//Provider
const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middleware)
  ));

  sagaMiddleware.run(rootSaga)

export default store;
