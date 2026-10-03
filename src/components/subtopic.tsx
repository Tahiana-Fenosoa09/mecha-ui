import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo , faFile } from "@fortawesome/free-solid-svg-icons";

type SubTopicProps = {
    type: string , 
    title: string
}

function SubTopic({type = 'document',title} : SubTopicProps){
    return(
        <>
            <div className="w-full h-[10%] gap-5 flex items-center border p-2 rounded-xl">
                <div className="w-[3vw] aspect-square rounded-full border flex justify-center items-center">
                    { type === 'video' ? <FontAwesomeIcon icon={faVideo} /> : type === 'document' ? <FontAwesomeIcon icon={faFile} /> : <>
                        <div className="w-[4vw] aspect-square rounded-full bg-black p-1"></div>
                    </>
                    }
                </div>
                <div>
                    <h1 className="text-xl">{title}</h1>
                </div>
            </div>
        </> 
    );
    
}
    
export default SubTopic;