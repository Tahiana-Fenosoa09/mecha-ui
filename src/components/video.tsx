import TimeLine, { type TimeLineType } from "./timeline";
type VideoType = {
    videoSource: string , 
    timeline: TimeLineType[]
}


function Video({videoSource,timeline} : VideoType) {
    return (
        <>
            <div className="w-full h-screen flex flex-col lg:flex-row p-2 gap-2 lg:gap-5 overflow-auto">
                <div className="w-full lg:w-2/4 h-[50%]">
                    <iframe 
                    className="w-full h-full"
                    src={videoSource} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="h-auto w-full lg:w-2/4 flex flex-col gap-5">
                    <h1 className="text-2xl font-medium">Time line</h1>
                    <div className="h-[2vh] w-full bg-gray-200 p-2"></div>
                    {
                        timeline.length !== 0 ? timeline.map((e) => <TimeLine time={e.time} description={e.description}/>) : <>
                            <div>

                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );

}

export default Video;