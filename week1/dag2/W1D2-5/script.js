const age = 31;
const isFemale = true;
const driverStatus = 'janklaas';
const ticket = 'yes';
const name = 'Tessa';
const totalAmount = 75;
const acedemy = 'sarah';

if(acedemy=== 'sarah'){
    console.log("je bent sarah, doet mee aan de cursus")
} else {
    console.log("bent geen sarah wat doe je hier")


}

if(age >= 25){
    console.log("je bent oud genoeg")
} else {
    console.log("Nope, je mag niet naar binnen")
}

    if(age >= 18 && age <= 25 ){
        console.log("Je krijgt 50% korting op je biertje")
    }
    

if(isFemale){
    console.log("Je ticket zegt dat je een vrouw bent!")
} else {
    console.log("Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen")
}

if(driverStatus === 'sarah'){
    console.log("Je bent de sarah, je mag autorijden")
} else {
    console.log("Je bent geen sarah, geef ze snel over")

}
if(name === 'Sarah' || name === 'Bram'){
    console.log('Je naam is Sarah of Bram, je krijgt een gratis biertje!')
} else {
    console.log('Je doet niet mee aan onze ludieke Sarah Abraham actie')
}

if(ticket === 'yes'){
    console.log("Je bent mag naar binnen")
} else {
    console.log("nee je mag niet naar binnen")
}
if(totalAmount >= 100){
    console.log('gratis flesje champagne.')
} else if (totalAmount > 50) {
    console.log('gratis portie nachos')
} else if (totalAmount > 25) {
    console.log('gratis (vega)bitterballen')
} else {
    console.log('Helaas geen korting, maar leuk dat je er bent')
}
