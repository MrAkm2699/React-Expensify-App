import { createStore} from 'redux';


const incrementCount=  ( {incrementBy=1} = {})=> ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=  ( {decrementBy=1} = {} )=> ({
    type:'DECREMENT',
    decrementBy
});

const setCount=  ( {count} = {} )=> ({
    type:'SET',
    count
});

const resetCount=  ( )=> ({
    type:'RESET'
});
const store = createStore( (state={count:0},action) =>{
   switch(action.type){
        case 'INCREMENT':
           return{
               count: state.count + action.incrementBy
           };

        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };

        case 'SET':
            return{
                count:action.count
            }

        case 'RESET':
            return{
                count: 0
            };

        default:
                return state;
    }
});
console.log(store.getState());

store.dispatch(incrementCount( {incrementBy:50}) );
console.log(store.getState());
store.dispatch(incrementCount( ) );
console.log(store.getState());
store.dispatch(decrementCount( {decrementBy:26} ) );
console.log(store.getState());
store.dispatch(setCount( {count:2600} ) );
console.log(store.getState());
// store.dispatch(resetCount( ));
// console.log(store.getState());

