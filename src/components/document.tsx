type DocumentType = {
    title : string , 
    content : string
}

function Document({title,content} : DocumentType){
    return(
        <>
            <div className="min-h-screen h-auto max-w-full flex flex-col items-center gap-5 p-2">
                <div className="h-[15%] w-full max-h-[20%] flex justify-center items-center">
                    <h1 className="text-4xl font-medium">{title}</h1>
                </div>
                <div className="h-full w-full flex flex-col gap-2">
                    {content}
                </div>
            </div>
        </> 
    );  
}
    
export default Document;