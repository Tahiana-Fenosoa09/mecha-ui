
function Video() {
    return (
        <>
            <div className="w-full h-screen flex flex-col lg:flex-row p-2 gap-2 lg:gap-5 overflow-auto">
                <div className="w-full lg:w-2/4 h-[50%] bg-black"></div>
                <div className="h-auto w-full lg:w-2/4 flex flex-col gap-5">
                    <h1 className="text-2xl font-medium">Time line</h1>
                    <div className="h-[2vh] w-full bg-gray-200 p-2"></div>
                    <div className="w-full h-auto p-2 flex gap-10 items-center">
                        <div className="w-[3vw] h-full flex flex-col gap-2 font-medium items-center">
                            <div >
                                <h3>00:01</h3>
                            </div>
                            <div className="w-full aspect-square rounded-full border-2"></div>
                        </div>
                        <div className="w-full h-full flex items-center font-medium">
                            <h3>Okay here we go you know my friend</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Video;