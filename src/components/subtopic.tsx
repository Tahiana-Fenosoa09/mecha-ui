import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faFile } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

type SubTopicProps = {
    type: string,
    title: string,
    id: number
}

function SubTopic({ type = 'document', title ,id}: SubTopicProps) {
    const navigate = useNavigate();

    function view(){
        if(type === 'document'){
            return ""
        }

        if(type === 'video'){
            navigate(`/videos/${id}`);
        }
    }

    return (
        <>
            <div className="w-full h-full justify-between flex items-center p-2 rounded-xl" onClick={view}>
                <div className="flex items-center gap-2">
                    <div className="w-[3vw] aspect-square rounded-full border flex justify-center items-center bg-black text-white">
                        {type === 'video' ? <FontAwesomeIcon icon={faVideo} /> : type === 'document' ? <FontAwesomeIcon icon={faFile} /> : <>
                            <div className="w-[4vw] aspect-square rounded-full bg-black p-1"></div>
                        </>
                        }
                    </div>
                    <div>
                        <h1 className="text-xl">{title}</h1>
                    </div>
                </div>
                <div>
                    <button className="w-[5vw] h-[90%] flex justify-center items-center text-xl font-medium bg-black text-white rounded">View</button>
                </div>
            </div>
        </>
    );
}

export default SubTopic;