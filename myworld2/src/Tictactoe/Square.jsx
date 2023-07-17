import './Gameall.css'

export default function Square({updatevalue,valuex=0}){
    return(
        <div onClick={updatevalue} className="Square">
            {valuex}
        </div>
    )
}