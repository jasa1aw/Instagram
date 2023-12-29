import Story from "./Story/story"
export default function Stories({stories,SelectedStories}){
    // const SelectedStory = (data) =>{
    //     SelectedStories(data.id, data.video)
    //     console.log(SelectedStories);
    // }
    let allStories = stories.map((story,index) => (<Story story={story} SelectedStory={SelectedStories} key={index}/>))
    return(
        <div className='stories highlights'>
            {allStories}
        </div>
    )
}