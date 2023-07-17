const list_sum=(n)=>{
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum+=n[i];
    }

    return sum;
}


export {list_sum};