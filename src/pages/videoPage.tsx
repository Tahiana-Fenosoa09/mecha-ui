import { useParams } from "react-router";
import Video from "../components/video.tsx";
import NotFound from "../components/notfound.tsx";
import { getVideoById } from "../data/home.data.ts";

function VideoPage(){

    const { id } = useParams();
    const videoId : number = Number(id);
    const videoSource : string = getVideoById(videoId);


    return(
        <>
        {
            videoId !== null ? <Video videoSource={videoSource} timeline={[{time : "01:01" ,description : "hello my friend"},{ time : "01:01" ,description : "hello my friend"}]}/> : <NotFound/> 
        }
        </> 
    );
}
    
export default VideoPage;