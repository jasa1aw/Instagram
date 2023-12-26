'use client'
import { END_POINT } from "@/config/end_point"
export default function UsersPost({post, SelectedPost}){
    return(
        <img  src={`${END_POINT}${post.image}`} alt="Not Found" onClick={() => SelectedPost(post)}/>
    )
}