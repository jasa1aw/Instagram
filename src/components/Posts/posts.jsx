import Post from "./Post/post"
export default function Posts({posts}){
    let allPosts = posts.map((post,index) => <Post imgSrc={post.url} description={post.description} key={index}/>)
    return(
        <div className='posts-img'>
            {allPosts}
        </div>
    )
}