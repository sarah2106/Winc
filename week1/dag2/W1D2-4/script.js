const age = 31;
const isFemale = true;
const driverStatus = 'sarah';
const ticket = 'yes';




if(age >= 25){
    console.log("je bent oud genoeg")
} else {
    console.log("Nope, je mag niet naar binnen")
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

if(ticket === 'yes'){
    console.log("Je bent mag naar binnen")
} else {
    console.log("nee je mag niet naar binnen")
}