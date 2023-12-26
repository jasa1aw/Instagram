'use client'
import UsersPost from "./UsersPost/usersPost";
export default function UsersPosts({posts,SelectedPost}){
    let allPosts = posts.map((post,index) => (<UsersPost post={post} SelectedPost={SelectedPost} key={index}/>))
    return(
        <div className="homeBlockItem">
            {allPosts}
        </div>
        
    )
}