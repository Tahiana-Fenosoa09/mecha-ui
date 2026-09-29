
function Home() {
    return (
        <>
            <div className="h-screen w-full flex flex-col gap-2">
                <div className="h-[10%] w-full flex justify-start items-center p-2">
                    <h1 className="text-2xl font-medium">Welcome to lobby</h1>
                </div>
                <div className="h-[50%] p-3 flex flex-col justify-center items-center gap-10">
                    <div>
                        <p className="text-xl ">Please choose between the following topics</p>
                    </div>
                    <ul className="w-full flex items-center justify-center gap-40 ">
                        <li className="h-full p-2 flex flex-col justify-center items-center gap-2">
                            <div className="w-[10vw] aspect-square rounded-full bg-black"></div>
                            <p>Science</p>
                        </li>
                        <li className="h-full p-2 flex flex-col justify-center items-center gap-2">
                            <div className="w-[10vw] aspect-square rounded-full bg-black"></div>
                            <p>Technology</p>
                        </li>
                       <li className="h-full p-2 flex flex-col justify-center items-center gap-2">
                            <div className="w-[10vw] aspect-square rounded-full bg-black"></div>
                            <p>Engineering</p>
                        </li>
                        <li className="h-full p-2 flex flex-col justify-center items-center gap-2">
                            <div className="w-[10vw] aspect-square rounded-full bg-black"></div>
                            <p>Mathematics</p>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );

}

export default Home;