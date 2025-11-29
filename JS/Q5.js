let a = 34;
let b = 48;
let c = 12 ;
if (a > b){
    if (a > c){
        console.log(a,"is larger");
    }else{
        console.log(c,"is larger");
    }
}else{
    if(b > c){
        console.log(b,"is larger");
    }else{
        console.log(c,"is larger");
    }
}

let n1 = 32;
let n2 = 34;
if((n1%10) == (n2%10)){
    console.log("numbers have the same last digit",n1%10);
}else{
    console.log("numbers don't have the same last digit");
}