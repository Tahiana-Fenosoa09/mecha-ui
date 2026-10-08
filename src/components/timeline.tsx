export type TimeLineType = {
    time: string , 
    description: string 
}

function TimeLine({time,description} : TimeLineType) {
    return (
        <>
            <div className="w-full h-auto p-2 flex gap-10 items-center">
                <div className="w-[3vw] h-full flex flex-col gap-2 font-medium items-center">
                    <div >
                        <h3>{time}</h3>
                    </div>
                    <div className="w-full aspect-square rounded-full border-2"></div>
                </div>
                <div className="w-full h-full flex items-center font-medium">
                    <h3>{description}</h3>
                </div>
            </div>
        </>
    );

}

export default TimeLine;