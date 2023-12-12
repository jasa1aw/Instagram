'use client'
export default function Story({story, SelectedStory}){
    return(
        <div className='story highlight'>
            <img src={story.url} alt={story.description} onClick={() => SelectedStory(story.id)}/>
        </div>
    )
}