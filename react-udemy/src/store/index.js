import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true}

// !Creating slices : reducer function
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        decrease(state, action){
            state.counter = state.counter - action.payload;
        },

        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

//todo --------------Auth_Slice--------------------------------
const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});
// ! configureStore is used to merge all reducer into one reducer function
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
});

// ! Exporting all Slices
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;