interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T> {
    (state: T, action: Action): T;
}

class Store<T> {

    private state: T;

    constructor(private reducer: Reducer<T>, initialState:T) {
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(this.state, action);
    }
}

// same reducer as before
let reducer: Reducer<number> = (state: number, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }
};

// create a new store
let store = new Store<number>(reducer, 0);
console.log(store.getState());

store.dispatch({type: 'INCREMENT'});
console.log(store.getState());

store.dispatch({type: 'INCREMENT'});
console.log(store.getState());

store.dispatch({type: 'DECREMENT'});
console.log(store.getState());


store.dispatch({type: 'INCREMENT', payload: 60});
console.log(store.getState());