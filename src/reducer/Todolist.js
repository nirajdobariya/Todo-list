const initialState = {
    list : []
};

const Todolist = ( state = initialState , action ) => {

    switch (action.type){
        
        case 'ADDTODO': 
        const { id , data} = action.payload;
        // console.log("action.payload",action.payload);
        return{
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]

        }
        
        case 'DLTTODO': 
        
        const newState = state.list.filter((element) => element.id !== action.payload );
        // console.log("newState",newState,action)

        return{
                ...state,
                list: newState

        }
        
        case 'RMVTODO':
            return{
                ...state,
                list: []
                
            }
            
            default: return state;
            
         
    
        }

    }



export default Todolist;