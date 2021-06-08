const car = {
    noOfWheels: 4,
    start() {
      return 'started';
    },
    stop() {
      return 'stopped';
    },
  };
 
 
//using Object.create to create clones - as recommended by ES5 standard
  const myCar = Object.create(car, { owner: { value: 'John' } });
  
  console.log(myCar.__proto__ === car); // true


  