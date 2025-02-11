import Icon from "../Icon/Icon";
import "./Card.css";

function Card({icon,onPlay,index,gameEnd}){
    return(
        <div className="card" onClick={()=>
        !gameEnd && icon===""&& onPlay(index)}>
           <Icon icon={icon} />
        </div>
    )
}
export default Card;