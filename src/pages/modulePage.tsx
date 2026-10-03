import Module from "../components/module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getModulesAtTopicId  , getBranchTitle, type BranchData} from "../data/home.data";
import { useNavigate, useParams} from "react-router";
import NotFound from "../components/notfound";

function ModulePage(){

    const { id } = useParams();
    const branchId = Number(id);
    const searchedModule : BranchData[] = getModulesAtTopicId(branchId);
    const navigate = useNavigate();
    const title = getBranchTitle(branchId);

    function goBack(){
        navigate(-1);
    }

    return(
        <>
            <div className="w-full h-screen flex flex-col gap-5 p-5">
                <div className="w-full h-[15%] flex items-center justify-center pl-10 pr-10">
                    <div className="w-full h-full flex items-center justify-start">
                        <h1 className="text-2xl font-medium">{title}</h1>
                    </div>
                </div>
                {
                    searchedModule.length === 0 ? <NotFound/> : <>
                        <ul className="h-[20%] flex items-center  justify-start gap-5">
                            {
                                searchedModule.map(module => <Module moduleName={module.name} onclick={() => {navigate(`/branches/${branchId}/module/${module.id}`)}}/>)
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
    
export default ModulePage;