//learnings 
//Only an event can change the state of the store.
//The function that returns the new state needs to be a pure function.

 const reducer= (state=[],action)=>{
    switch(action.type){
        case "TYPE_REDUCER":
            return state.concat(action.data)
        default:
            return state
    }
}
 // The store should have 4 parts
    /*
    1. The state
    2. Get the state
    3. Listen to changes on the state
    4. Update the state
    */
 const createStore= ()=>{
    let state //The state
    let listners = []
    const getState = () => state  
    const subscribe = (listner)=> {
        console.log("Subscribed to listen changes")
        listners.push(listner)
        //unsubscribe
        return ()=>{
            listners = listners.filter(l=>l!==listner) //this will unsubscribe
        }
    }
    const dispatch = (action)=>{
        state = reducer(state,action)
        listners.forEach(listner=>listner())
    }
    return {
        getState, 
        subscribe,
        dispatch
    }
}


const store = createStore()
store.subscribe(()=>{
    console.log("Listner 1",store.getState())
})
store.subscribe(()=>{
    console.log("Listner 2",store.getState())
})

store.dispatch({type:"TYPE_REDUCER",data:{"date":new Date()}})
store.dispatch({type:"TYPE_REDUCER2",data:{"date":new Date(),"reducer":"2"}})
store.dispatch({type:"TYPE_REDUCER",data:{"date":new Date(),"display":true}})
