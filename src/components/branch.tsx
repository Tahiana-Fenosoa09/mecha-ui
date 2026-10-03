type BranchProps = {
    branchName: string;
    onClick: () => void;
};


function Branch({branchName,onClick}:BranchProps) {
    return (
        <>
            <li className="h-full p-2 flex flex-col justify-center items-center gap-2" onClick={onClick}>
                <div className="w-[10vw] aspect-square rounded-full bg-black"></div>
                <p>{ branchName }</p>
            </li>
        </>
    );
 
}

export default Branch;