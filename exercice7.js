function valid(passwd){
    return passwd.length >= 8 && passwd.indexOf("@") != -1;
}

function main(){
    let val = prompt("Enter mot de passe: ");
    if(valid(val)){
        console.log("Mot de passe valide");
    }else{
        console.log("Mot de passe nom valide");
    }
}
main();