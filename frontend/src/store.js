// frontend/src/store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemListReducer, itemDetailsReducer } from './reducers/itemreducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userreducers';
import { orderListReducer, orderDetailsReducer } from './reducers/orderreducers'; // Add this import

const reducer = {
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orderList: orderListReducer,         // Add this reducer
    orderDetails: orderDetailsReducer,
};

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
    devTools: composeWithDevTools(),
});

export default store;

