import SubTopic from "./subtopic";
import { getSubtopics, type SubTopicType } from "../data/home.data";

function Topic({title} :  {title : string}){

    const subTopics : SubTopicType[] = getSubtopics();
    return(
        <>
            <div className="w-[90%] h-auto rounded flex flex-col gap-2 shadow">
                <div className="w-full h-[20%] flex gap-5 p-2 items-center">
                    <div className="w-[4vw] aspect-square rounded-full bg-black p-1"></div>
                    <div className="h-full flex flex-col gap-2">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <div className="w-full pl-2 pr-2">
                            <p className="text-gray-400">topic is empty</p>
                        </div>
                    </div>
                </div>
                <div className="h-[2vh] w-full bg-gray-200 p-2"></div>
                <div className="w-full h-[90%] flex flex-col gap-5 p-2">
                    { subTopics.map(subTopic => <SubTopic title={subTopic.title} type={subTopic.type} id={subTopic.id}/>)}
                </div>
            </div>
        </> 
    );
    
}
    
export default Topic;