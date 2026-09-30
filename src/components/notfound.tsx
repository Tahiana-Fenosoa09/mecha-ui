import PhotoNotFound from "../assets/notfound.png";

function NotFound(){
    return(
        <>
            <div className="h-full w-full flex flex-col items-center justify-center gap-5">
                <img src={PhotoNotFound} />
                <h1 className="text-4xl font-bold">This source is empty </h1>
            </div>
        </> 
    );
    
}
    
export default NotFound;