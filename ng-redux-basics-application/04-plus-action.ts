interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T> {
    (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {

    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }
}

let incrementAction: Action = {type: 'INCREMENT'};
console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));

let decrementAction: Action = {type: 'DECREMENT'};
console.log(reducer(100, decrementAction));

let plusAction: Action = {type: 'PLUS', payload: 7};
console.log(reducer(3, plusAction));
console.log(reducer(3, {type: 'PLUS', payload: 9000}));
console.log(reducer(3, {type: 'PLUS', payload: -2}));