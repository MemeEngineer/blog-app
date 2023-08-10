import PostsList from "../components/PostsList"
import AddPostForm from "../components/AddPostForm"

export default function HomePage(){
    return(
        <main>
            <h1>Home Page Component</h1>
            <AddPostForm/>
            <PostsList/>
        </main>
        
    )
}