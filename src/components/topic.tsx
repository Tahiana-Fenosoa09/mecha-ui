
function Topic({topicName}: { topicName : string }) {
    return (
        <>
            <li className="h-full p-2 flex flex-col justify-center items-center gap-2">
                <div className="w-[10vw] aspect-square rounded-full bg-black"></div>
                <p>{ topicName }</p>
            </li>
        </>
    );

}

export default Topic;