import { Link } from "react-router-dom";
import onlineStatus from "./useOnlineStatus";
const Header = () => {

    const online=onlineStatus();
    return (
        <div>
            <div>
                BHELPURI
            </div>

            <div>
                {online?"Online":"Offline"}
            </div>
            <div>
               <Link to={"/body"}>Home</Link>
            </div>
            <div>
          <Link to={"/about"}>About</Link>
            </div>
   
        </div>
    )
}
export default Header;