import '../styles/Square.css'
function Square({index,jindex,value,fun}){
    console.log(value);
    const handleclick=()=>{
        fun(index,jindex);
    }

    let render=' ';
    console.log(value[index][jindex]);
    switch(value[index][jindex]){
        case 0:
            render="O";
            break;
        case 1:
            render="X";
            break;
        case -1:
            render=" "
            break;
        default:
            break;
    }
    return(
        <>
        <div onClick={handleclick} id="Square" >
            <button>{render}</button>
        </div>
        </>
    )
}

export default Square;