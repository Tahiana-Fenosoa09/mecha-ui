import DisabledPhoto from "../assets/disabled.png";

function Disabled() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 sm:px-6">
            <div className="w-full max-w-2xl flex justify-center">
                <img
                    src={DisabledPhoto}
                    alt="App temporarily unavailable"
                    className="w-full max-w-lg h-auto object-contain"
                />
            </div>

            <div className="w-full max-w-3xl text-center mt-6 sm:mt-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
                    App is temporarily out of use. Please wait for future updates!
                </h1>
            </div>
        </div>
    );
}

export default Disabled;
