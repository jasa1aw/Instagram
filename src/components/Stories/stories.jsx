import Story from "./Story/story"
export default function Stories({stories,SelectedStories}){
    const SelectedStory = (id) =>{
        SelectedStories(id)
    }
    let allStories = stories.map((story,index) => (<Story story={story} SelectedStory={SelectedStory} key={index}/>))
    return(
        <div className='story highlight'>
            {allStories}
        </div>
    )
}