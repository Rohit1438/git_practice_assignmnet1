
  

let checkPrime = (num)=>{
     let count=0;
    for(let i =2;i<=Math.sqrt(num);i++){

    if(num%i==0){
      count++
    }

    }

    return count==0?true:false
}



let x = checkPrime(33)


console.log(x)
 