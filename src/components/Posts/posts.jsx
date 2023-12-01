import Post from "./Post/post"
export default function Posts({posts,SelectedPosts}){
    const SelectedPost = (id) =>{
        SelectedPosts(id)
    }
    let allPosts = posts.map((post,index) => (<Post post={post} SelectedPost={SelectedPost} key={index}/>))
    return(
        <div className='posts-img'>
            {allPosts}
        </div>
    )
}