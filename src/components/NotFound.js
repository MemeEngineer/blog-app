import {Link} from "react-router-dom"


export default function NotFound(){


    return(
        <div>
            <h1>PAGE NOT FOUND</h1>
            <Link to='/'> Go Back Home</Link>
        </div>
    )
}