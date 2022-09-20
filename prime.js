function CheckPrime(n){
    if(n<=1){
        return false;
    }
    for(let i=2;i<=n**0.5;++i){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
let N=13;
let result=CheckPrime(N);
if(result){
    console.log("Prime");
}else{
    console.log(" Not Prime");
}