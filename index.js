let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge= pet => new Date().getFullYear() - pet.bornOn;
  pets.forEach((pet)=>(console.log(pet)));

  pets.forEach((pet)=>{if(pet.type===`dog`){console.log(pet)}})

  pets.forEach((jasper)=>{if(jasper.name===`Jasper`){console.log(`Jasper is ${getAge(jasper)} years old`)}})
  