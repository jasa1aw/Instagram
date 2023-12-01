'use client'
export default function Post({post, SelectedPost}){
    return(
        <img src={post.url} alt={post.description} onClick={() => SelectedPost(post.id)}/>
        
    )
}