import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

export function configureStore(initialState) {
    const middleware = [thunk, routerMiddleware(history)];
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            DevTools.instrument()
        )
    );
}
