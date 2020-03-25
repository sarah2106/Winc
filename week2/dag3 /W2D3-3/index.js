const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    

    const superheroes = [
        {name: "Batman", alter_ego: "Bruce Wayne"}, 
        {name: "Superman", alter_ego: "Clark Kent"}, 
        {name: "Spiderman", alter_ego: "Peter Parker"}]
    ];
    const findSpiderMan = function((superheroesToBeFiltered) {
       return superheroesToBeFiltered.find(function(superhero){

       };
       console.log ("find spiderman;" , findSpiderMan(superheroes));

       doubleArrayValues([1, 2, 3]) 
       // result should be [2, 4, 6]

       const doubleArrayValues = function(array){
           let newArray = [];
           array.forEach(number =>){
               newArray.push(number *2);

           });
           return newArray
       };

       const containsNumberBiggerThan10 = function(array) {
           return array.some (number =>{
               return number >10;
           });
        };
          
          console.log(
            "Je suis bigger than 10:",
            containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
          ); 

          function isItalyInTheGreat7(array) {
            return array.includes("Italy");
          }
          console.log(
            isItalyInTheGreat7([
              "Canada",
              "France",
              "Germany",
              "Italy",
              "Japan",
              "United Kingdom",
              "United States"
            ])
          );

          const tenfold = function(array){
              let array = [];
              array.forEach(number =>{
                  newArray.push (number*10);
              });
              return newArray;

          };

          function isBelow100(array) {
            return array.every(number => {
              return number < 100;
            });
          }
          console.log(
            "Onder de 100?:",
            isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
          ); // fout
          console.log(
            "Onder de 100?:",
            isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98])
          ); // goed
    