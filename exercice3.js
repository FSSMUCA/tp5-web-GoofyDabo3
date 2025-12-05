let val = prompt("Entrer un nombre: ")
val = parseInt(val)

if (val < 0) {
    console.log("Nombre negatif")
}
else if (val <= 10) {
    console.log("Petit")
}
else if (val <= 50) {
    console.log("Moyen")
}
else if (val <= 100) {
    console.log("Grand")
}
else{
    console.log("Tres grand")
}