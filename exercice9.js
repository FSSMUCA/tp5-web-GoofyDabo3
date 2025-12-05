function factorielle(n){
    if (n == 0){
        return 1;
    }
    return n * factorielle(n - 1);
}

function main(){
    let num = parseInt(prompt("Entrer un nombre entier positif: "));
    console.log("Factorielle: ", factorielle(num));
}

main();