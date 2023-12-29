'use client'
import { END_POINT } from "@/config/end_point"
export default function Story({story, SelectedStory}){
    return(
        <div className='story highlight'>
            <img src={`/img/profile/posts/post1.svg`} alt='not Found' onClick={() => SelectedStory(story)}/>
        </div>
    )
}