import Module from "../components/module";
function ModulePage(){

    

    return(
        <>
            <div className="w-full h-screen flex flex-col gap-10 p-2">
                <div className="w-full h-[10%] flex items-center justify-start p-2">
                    <h1 className="text-2xl font-medium">Title</h1>
                </div>
                <ul className="h-[20%] flex items-center  justify-start gap-5">
                    <Module moduleName="Software"/>
                </ul>
            </div>
        </> 
    );
    
}
    
export default ModulePage;