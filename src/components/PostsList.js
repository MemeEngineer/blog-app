import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import PostItem from './PostItem'
import { fetchPosts } from '../redux/slices/postsSlice'

export default function PostsList(){
    const posts = useSelector( state => state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [dispatch])
   
    return(
        <div>
            <h1>Post List</h1>
            <section>
                {posts.length? (posts.map(post => <PostItem post={post} key={post.id}/>)): (<h3>Loading</h3>)}
            </section>
        </div>
    )
}