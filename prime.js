function CheckPrime(n){
    if(n<=1){
        return true;
    }
    for(let i=2;i<=n**0.5;++i){
        if(n%i==0){
            return false;
        }
    }
    return false;
}
let N=13;
let result=CheckPrime(N);
if(result){
    console.log("Not Prime");
}else{
    console.log("Prime");
}