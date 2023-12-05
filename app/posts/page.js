import Link from 'next/link'
import './post.css'
export default async function postsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 120
        }
    })
    const posts = await response.json()
    return (
        posts.map((post) => {
            return (
                <div className='container'>
                    <div className="post">
                        <h2><Link href={`posts/${post.id}`}>{post.title}</Link></h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    )
}