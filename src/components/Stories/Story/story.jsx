'use client'
export default function Story({story, SelectedStory}){
    return(
        <img src={story.url} alt={story.description} onClick={() => SelectedStory(story.id)}/>
    )
}