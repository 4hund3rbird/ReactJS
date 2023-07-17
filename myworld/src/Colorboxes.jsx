import Colorbox from "./Colorbox"
import './Colorbox.css'

export default function Colorboxes(){
    let boxes=[];
    for(let i=0;i<84;i++){
        boxes.push(<Colorbox/>)
    }
    return(
        <div className="Container">
            {boxes}
        </div>
    )
}