import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCircleUser , faCircleHalfStroke , faMoneyCheckDollar, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Setting({clicked = false}){
    return(
        <>
            {clicked && <>
                <div className="h-[45vh] w-[20vw] p-3 flex flex-col gap-1 justify-center rounded-2xl shadow absolute right-10 top-20 z-10 bg-white">
                    <div className="h-[10%] w-full flex justify-between items-center">
                        <div>
                            <p>Tahiana Fenosoa</p>
                        </div>
                        <div className="w-[3vw] aspect-square rounded-full bg-black p-1"></div>
                    </div>
                    <ul className="h-[90%] w-full flex flex-col justify-around">
                        <li className="h-[10%] w-full flex gap-2 items-center hover:bg-gray-200 p-2 rounded">
                            <div>
                                <FontAwesomeIcon icon={faCircleUser}  size="xl"/>
                            </div>
                            <p> User information</p>
                        </li>
                        <li className="h-[10%] w-full flex gap-2 items-center hover:bg-gray-200 p-2 rounded">
                            <div> 
                                <FontAwesomeIcon icon={faLanguage} size="xl"/>
                            </div>
                            <p>Language</p>
                        </li>
                        <li className="h-[10%] w-full flex gap-2 items-center hover:bg-gray-200 p-2 rounded">
                            <div>
                                <FontAwesomeIcon icon={faCircleHalfStroke} size="xl"/>
                            </div>
                            <p>Theme</p>
                        </li>
                        <li className="h-[10%] w-full flex gap-2 items-center hover:bg-gray-200 p-2 rounded">
                            <div>
                                <FontAwesomeIcon icon={faMoneyCheckDollar} size="xl"/>
                            </div>
                            <p>Subscription</p>
                        </li>
                        <li className="h-[10%] w-full flex gap-2 items-center hover:bg-gray-200 p-2 rounded">
                            <div>
                                <FontAwesomeIcon icon={faRightFromBracket} size="xl"/>
                            </div>
                            <p>Log out</p>
                        </li>
                    </ul>
                </div>
            </>
            }
        </> 
    );
    
}
    
export default Setting;