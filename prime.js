function CheckPrime(n){
    if(n<=1){
        return "False";

    }
    for(let i=2;i<=n**0.5;++i){
        if(n%i==0){
            return "False";
        }
    }
    return "True";
}
let N=13;
let result=CheckPrime(N);
if(result=="True"){
    console.log("Prime");
}
else{
    console.log(" Not Prime");
}