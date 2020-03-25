let colors = ["yellow", "blue", "red", "orange"];
​
while (colors < length) {
  colors++;
}



const array1 = ['a', 'b', 'c','d'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"







//1. Hoeveel regels neemt mijn for loop in beslag? 
//2. Hoeveel regels neemt mijn `forEach` method in beslag? 2
//3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? Het is korter en overzichtlijker.
//4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
var obj = {prop1: 'prop1Value', prop2: 'prop2Value', child: {childProp1: 'childProp1Value'}}
console.log(obj)