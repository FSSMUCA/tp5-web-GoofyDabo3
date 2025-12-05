function totalAvecRemise(ht, remise){
    return ht * (1 - (remise / 100));
}

function main(){
    let ht = Number(prompt("HT: "));
    let remise = Number(prompt("Remise(en %): "));
    console.log("Prix total: ", totalAvecRemise(ht, remise));
}

main();