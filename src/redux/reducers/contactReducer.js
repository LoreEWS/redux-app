const initialState = [
    {
        id: 0,
        name: "Lorenzo Fuentes",
        number: 45781245,
        email: "lorenzo@gmail.com",
    },
    {
        id: 1,
        name: "Juan Pablo",
        number: 78459624,
        email: "juanpablo@gmail.com",
    },
    {
        id: 2,
        name: "Marta Mendez",
        number: 54781243,
        email: "marta@gmail.com",
    },
];

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload: contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
        default: 
            return state;
        
    }
};

export default contactReducer;