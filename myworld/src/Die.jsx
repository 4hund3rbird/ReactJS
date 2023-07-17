export default function Dieroll({n=6}){
    let die=Math.floor((Math.random()*n)+1)
    return(
        <h1>Die rolled: {die} from {n}</h1>
    )
}