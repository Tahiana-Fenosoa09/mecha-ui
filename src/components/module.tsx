type ModuleNameCompoenent = {
    moduleName : string , 
    onclick : () => void ;
}
function Module({moduleName , onclick} : ModuleNameCompoenent){
    return(
        <>
            <li className="h-full p-2 flex flex-col justify-center items-center gap-2" onClick={onclick}>
                <div className="w-[8vw] aspect-square rounded-full bg-black"></div>
                <p>{moduleName}</p>
            </li>
        </> 
    );
    
}
    
export default Module;