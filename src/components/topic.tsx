type TopicProps = {
    topicName: string;
    onClick: () => void;
};


function Topic({topicName,onClick}:TopicProps) {
    return (
        <>
            <li className="h-full p-2 flex flex-col justify-center items-center gap-2" onClick={onClick}>
                <div className="w-[10vw] aspect-square rounded-full bg-black"></div>
                <p>{ topicName }</p>
            </li>
        </>
    );

}

export default Topic;