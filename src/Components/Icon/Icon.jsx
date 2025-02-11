import { FaRegCircle , FaTimes , FaPen } from "react-icons/fa";
function Icon({icon}){
    if(icon==="o"){
        return  <FaRegCircle />
    }else if(icon==="x"){
        return  <FaTimes />
    }else{
        return <FaPen/>
    }
}
export default Icon;
