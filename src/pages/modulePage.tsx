import Module from "../components/module";
import { getModulesAtTopicId  , type TopicData} from "../data/home.data";
import { useParams } from "react-router";
import NotFound from "../components/notfound";

function ModulePage(){

    const { id } = useParams();
    const topidId = Number(id);
    const searchedModule : TopicData[] = getModulesAtTopicId(topidId);

    if(searchedModule.length === 0){
        return <NotFound/>
    }

    return(
        <>
            <div className="w-full h-screen flex flex-col gap-10 p-2">
                <div className="w-full h-[10%] flex items-center justify-start p-2">
                    <h1 className="text-2xl font-medium">Title</h1>
                </div>
                <ul className="h-[20%] flex items-center  justify-start gap-5">
                    {
                        searchedModule.map(module => <Module moduleName={module.name}/>)
                    }
                </ul>
            </div>
        </> 
    );
    
}
    
export default ModulePage;