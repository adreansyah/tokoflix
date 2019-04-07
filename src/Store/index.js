import { createStore, applyMiddleware } from 'redux';
import  thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { LoadScrollPage } from '../Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history';
const history          = createBrowserHistory();
const loggerMiddleware = createLogger();
const ManageReducers   = combineReducers({
    LoadScrollPage,
    routing: routerReducer,
})
export const store = createStore(
    ManageReducers,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            routerMiddleware(history)
        )
    )
)