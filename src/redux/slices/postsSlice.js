import {createSlice} from '@reduxjs/toolkit'


export const postsSlice = createSlice({
    name: "posts",
    initialState: [
        {id:"1", title:"first post!", content: "Hello!" },
        {id:"2", title:"second post", content:"More Text"},
    ],
    reducers: {
        addPost: (state, action) => {
            const {payload} = action;
            state.push(payload)

        },
        editPost: (state,action) => {
            const {payload} = action;
            const indexOfPost = state.findIndex(post => post.id === payload.id)
            state[indexOfPost]= payload;

            //This works to update the state 
            //state.splice(indexOfPost, 1, payload)
        }

    },
})



//actions
export const {addPost, editPost} = postsSlice.actions;

//reducer
export default postsSlice.reducer