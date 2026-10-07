import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NotFound from "../components/notfound";
import { getModuleTitle, getTopicsAtModulesId, type TopicType } from "../data/home.data";
import Topic from "../components/topic";

function SubModulePage() {

    const navigate = useNavigate();
    const { moduleId } = useParams();
    const module = Number(moduleId);
    const subModule: TopicType[] = getTopicsAtModulesId(module);
    const title: string = getModuleTitle(module);
    function goBack() {
        navigate(-1);
    }

    return (
        <>
                <div className="w-full h-auto min-h-screen flex flex-col gap-5 p-10 ">
                    <div className="w-full h-[15%] flex items-center justify-center pl-10 pr-10">
                        <div className="w-full h-full flex items-center justify-start">
                            <h1 className="text-2xl font-medium">{title}</h1>
                        </div>
                    </div>
                    {
                        subModule.length === 0 ? <NotFound /> : <>
                            <ul className=" w-full flex flex-col justify-start gap-10 p-2">
                                {
                                    subModule.map(topic => <Topic title={topic.title} />)
                                }
                            </ul>
                        </>
                    }
                    <button className="w-[5vw] h-[5vh] flex gap-2 p-2 items-center justify-around absolute top-2 left-2" onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        back
                    </button>
                </div>
        </>
    );

}

export default SubModulePage;