function createStore(){
    // The store should have 4 parts
    /*
    1. The state
    2. Get the state
    3. Listen to changes on the state
    4. Update the state
    */

    let state = {} //The state
    let listners = []
    const getState = () => state  
    const subscribe = (listner)=> {
        console.log("Subscribed")
        listners.push(listner)
        //unsubscribe
        return ()=>{
            listners = listners.filter(l=>l!==listner) //this will unsubscribe
        }
    }
    return {
        getState, //2.get the state
        subscribe
    }
}


const store = createStore()
store.subscribe(()=>{
    console.log("Subscribed",store.getState())
})
