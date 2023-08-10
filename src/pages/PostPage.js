import {useParams, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function PostPage(){
const {id} = useParams()

//gets the post in state and finds the post with the id from the params
const post = useSelector(state => state.posts.find((post) => post.id === id))
    return(
        <div>
            <h1>Post Page Compoment</h1>
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                
            </div>
            <Link to={`/posts/edit/${id}`}>Edit Post</Link>
        </div>
        
    )
}