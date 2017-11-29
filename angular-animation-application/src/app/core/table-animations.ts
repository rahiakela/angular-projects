import {trigger, style, state, transition, animate, group} from '@angular/core';

const commonStyles = {
    border: "black solid 4px",
    color: "white"
}

export const HighlightTrigger = trigger('rowHighlight', [
    state('selected', style([commonStyles, {
        backgroundColor: 'lightgreen',
        fontSize: '20px'
    }])),
    state('notselected', style([commonStyles, {
        backgroundColor: 'lightsalmon',
        fontSize: '12px',
        color: 'black'
    }])),
    state('*', style({
        border: 'solid black 2px'
    })),
    state('void', style({
        opacity: 0
    })),
    transition('* => notselected', animate('200 ms')),
    transition('* => selected', [
        animate('400 ms 200 ms ease-in', style({backgroundColor: 'lightblue', fontSize: '25px'})),
        group([
            animate('250 ms', style({backgroundColor: 'lightcoral'})),
            animate('450 ms', style({fontSize: '30px'}))
        ]),
        animate('200 ms')
    ]),
    transition('void => *', animate('500 ms'))
]); 