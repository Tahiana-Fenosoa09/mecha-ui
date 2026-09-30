import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Setting from "../components/setting.tsx";
import { useState } from "react";
import { getTopics, type TopicData } from "../data/home.data.ts";
import Topic from "../components/topic.tsx";

function Home() {

    const [settingsClicked, setSettingsClicked] = useState(false);
    const topics: TopicData[] = getTopics();

    function showSettings() {
        setSettingsClicked(prev => !prev);
    }


    return (
        <>
            <div className="h-screen w-full flex flex-col gap-2 relative">
                <div className="h-[10%] w-full flex justify-between items-center p-2 pl-10 pr-10">
                    <div>
                        <h1 className="text-2xl font-medium">Welcome to lobby</h1>
                    </div>
                    <div onClick={showSettings}>
                        <FontAwesomeIcon icon={faGear} size="2xl" />
                    </div>
                </div>
                <div className="h-[50%] p-3 flex flex-col justify-center items-center gap-10">
                    <div>
                        <p className="text-xl ">Please choose between the following topics</p>
                    </div>
                    <ul className="w-full flex items-center justify-center gap-40 ">
                        {
                            topics.map(topic => (
                                < Topic topicName={topic.name}/>
                            ))
                        }
                    </ul>
                </div>
                <Setting clicked={settingsClicked} />
            </div>
        </>
    );

}

export default Home;