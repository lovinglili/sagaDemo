import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleWares)
    )
)

sagaMiddleware.run(rootSaga);

export default store