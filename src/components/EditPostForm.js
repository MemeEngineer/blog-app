import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import {editPost} from "../redux/slices/postsSlice"


export default function EditPostForm(){

    const {id} = useParams();
    const navigate = useNavigate();
//get data from redux global state
    const postToUpdate = useSelector(state => state.posts.find((post) => post.id ===id))

    //set post to local useState
    const [formData , setFormData]= useState( postToUpdate)

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const dispatch= useDispatch()
    
const handleSubmit = (e) =>{
    e.preventDefault()
dispatch(editPost(formData))
//returns user to the edit page
navigate(`/posts/${id}`)

}

    return(
        <div>
            <div>
        <form onSubmit={handleSubmit}>
  
          <label htmlFor="title">Title: </label>
          <input id="title" type="text" name="title" value={formData.title} 
          onChange={handleChange}
          />
          
          <br/>
          <br/>
  
          <label htmlFor="content">Content: </label>
          <textarea id="content" name="content" value={formData.content}
          onChange={handleChange} 
           />
  
          <button>Edit</button>
        </form>
      </div>
        </div>
    )
}