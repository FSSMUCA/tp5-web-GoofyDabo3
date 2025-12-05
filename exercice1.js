let x = "150"
let y = 150
let z = true

console.log("x: ",typeof x)
console.log("y: ",typeof y)
console.log("z: ",typeof z)

x = parseInt(x)

console.log("x(apres parseInt): ",typeof x)

/*
    En JavaScript, la variable elle-même n’a pas de type fixe ; seule la valeur possède un type.
    C’est pour ça que le type d’une variable peut changer dynamiquement pendant l’exécution du programme.
*/
