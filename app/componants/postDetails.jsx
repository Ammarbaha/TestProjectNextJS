export default async function PostDetails({postID}){
    const response  =  await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`,{
        next:{
            revalidate:120
        }
    })
    const post = await response.json()
    return(
        <div>
           <h2>{post.title}</h2>
           <p>{post.body}</p>
        </div>
    )
}