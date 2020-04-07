const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
   
  const getCarBrand = car.getBrand (car);
   
  getCarBrand();   // output Nissan ??



const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  const getCarBrand = car.getBrand.bind(car);
  getCarBrand();   // output: .nisssan....??

  <button id="btn" type="button">Get the car's brand</button>
 
  const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
   
 const el = document.getElementById("btn");
  el.addEventListener("click", car.getBrand.bind(car));
  // Hey car.getBrand functie, ik weet dat je nu op een element Button staat, 
  // maar je hoort bij het car object, daar bind ik je nu even expliciet aan vast.


 const car = {
    brand: "Nissan",
    getBrand: function(){
      // the arrow function keeps the scope of "this" accessible.
      const printBrandName = () => {   
      // const self = this; deze regel heb je niet meer nodig. 
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();   // output: Nissan