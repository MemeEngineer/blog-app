import {useSelector} from 'react-redux'
import PostItem from './PostItem'

export default function PostsList(){
    const posts = useSelector( state => state.posts)

   
    return(
        <div>
            <h1>Post List</h1>
            <section>
                {posts.length? (posts.map(post => <PostItem post={post} key={post.id}/>)): (<h3>Loading</h3>)}
            </section>
        </div>
    )
}