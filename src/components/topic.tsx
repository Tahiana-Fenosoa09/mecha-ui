    
function Topic(){
    return(
        <>
            <div className="w-[60%] h-auto p-2 rounded-xl flex flex-col gap-1 shadow">
                <div className="w-full h-[10%] flex gap-5 p-2 items-center">
                    <div className="w-[4vw] aspect-square rounded-full bg-black p-1"></div>
                    <div className="h-full flex flex-col gap-2">
                        <h1 className="text-xl font-medium">Topic title</h1>
                        <div className="w-full pl-2 pr-2">
                            <p className="text-gray-400">topic is empty</p>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
    
}
    
export default Topic;