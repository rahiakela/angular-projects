interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T> {
    (state: T, action: Action): T;
}

interface ListenerCallback {
    (): void;
}

interface UnsubscribeCallback {
    (): void;
}

class Store<T> {

    private state: T;
    private listeners: ListenerCallback[] = [];

    constructor(private reducer: Reducer<T>, initialState:T) {
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener: ListenerCallback) => listener());
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this.listeners.push(listener);

        // returns an "unsubscribe" function
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
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

// we can subscribe to changes in our store
let store = new Store<number>(reducer, 0);
console.log(store.getState());

// subscribe store
let unsubscribe = store.subscribe(() => {
    console.log('subscribed: ' + store.getState());
});

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

// unsubscribe store
unsubscribe();
store.dispatch({type: 'DECREMENT'});

// decrement happened, even though we weren't listening for it
console.log(store.getState());
