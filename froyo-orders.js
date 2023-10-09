/** 
A visitor receives a prompt upon opening the website to enter a list 
of comma-separated froyo flavors. They type: 
"vanilla,vanilla,vanilla,strawberry,coffee,coffee". When they view 
the browser console, they observe a table listing how many of each 
flavor they have ordered. In this case, they will be able to observe 
that they have ordered three vanilla, two coffee, and one strawberry 
froyo.*/

const userInputString = prompt(
    "--------------Froyo Flavors Menue---------------\n"+
    "V: Vanilla\nS: Strawberry\nC: Coffee\n" +
    "Please enter a list of comma-separated froyo flavors: ",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  // Split the user input into an array of flavors
  const orderedFlavors = userInputString.split(',');
  // Display the array of flavors
  console.table(orderedFlavors)

  //Listing how many of each flavor they have ordered
   console.table(countFlavors(orderedFlavors));

/**
 * @param {string[]} orderedFlavors an array of strings
 * @returns {object} the object that hold the pair (names,frequencies) of elements 
 */
   function countFlavors(orderedFlavors){
    const flavors = {
        vanilla: 0,
        strawberry: 0,
        coffee: 0
    };  
    orderedFlavors.forEach((flavor) => {
        if(flavor === "vanilla" || flavor === "V" || flavor === "v")
            flavors.vanilla ++
        else if(flavor === "strawberry" || flavor === "S" || flavor === "s")
            flavors.strawberry ++
        else if(flavor ==="coffee" || flavor === "C" || flavor === "c")
            flavors.coffee++
    })
    return flavors
   }
  