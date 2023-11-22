import Post from "./Post/post"
export default function Posts({posts}){
    // console.log(posts[0].url)
    let allPosts = posts.map((post,index) => <Post imgSrc={post.url} description={post.description} key={index}/>)
    // console.log(allPosts);
    return(
        <div className='posts-img'>
            {allPosts}
        </div>
        
    )
}