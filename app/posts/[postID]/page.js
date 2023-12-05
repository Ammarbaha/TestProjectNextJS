import PostDetails from "@/app/componants/postDetails"
import { Suspense } from "react"

export default async function PostDetailsPage(props){
    const postID = props.params.postID
    const loadingJSX = (<div><h3>Loading...</h3></div>)
    return(
        <div>
            <h1>Post Details</h1>
            <Suspense fallback={loadingJSX}>
            <PostDetails postID={postID}/>
            </Suspense>
        </div>
    )
}