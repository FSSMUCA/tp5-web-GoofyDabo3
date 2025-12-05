let pair = 0;
let impair = 0;

for (let i = 1; i <= 50; i++)
{
    if (i % 2 == 0){
        pair ++;
    }else{
        impair ++;
    }
}

console.log(pair,"pair et", impair,"impair");