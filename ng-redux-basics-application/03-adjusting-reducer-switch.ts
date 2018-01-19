interface Action {
    type: string;
    action?: any;
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
        default: 
            return state;
    }
} 

let incrementAction: Action = {type: 'INCREMENT'};
console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));

let decrementAction: Action = {type: 'DECREMENT'};
console.log(reducer(100, decrementAction));

// any other action just returns the input state
let unknownAction: Action = {type: 'UNKNOWN'};
console.log(reducer(100, unknownAction));