// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);

// data = [{}]
// This data contains an array of an object literals
// data.price
// data[data.price] <-- That doesn't work
// data[0].price <--- That works since it gives me the value of price which is 12.00

console.log(data);

function listingtags(){
  let listmaterials = [];

  for (i = 0; i < data.length; i++){
    listmaterials = data[i].materials.pop();
    listmaterials = data[i].materials.pop() + listmaterials;
    return listingtags; 
  }
  console.log(listmaterials)
}

// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
let sum = 0;
let avg = 0;

  for (i = 0; i < data.length; i++){
    sum = data[i].price + sum;
    avg =  sum / data.length;
  }
  console.log("The average price is $" + avg);
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
let costbetween = [];

for (i = 0; i < data.length; i++){
  if (data[i].price >= 14.00 && data[i].price <= 18.00){
    costbetween.push(data[i].title + "\n")
  }
}
console.log(costbetween + "\n");
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:

  let current = [];

  for (i = 0; i < data.length; i++){
    if (data[i].currency_code === "GBP"){
      current.push(data[i].title + " cost " + data[i].price + " pounds.")
    }
  }
  console.log(current);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:

let madeofwood = [];

  for (i = 0; i < data.length; i++){
      for (w = 0; w < data[i].materials.length; w++){
        if (data[i].materials[w] === "wood"){
          madeofwood.push(data[i].title + "\n");
        }
      }

  }
  console.log(madeofwood + "\n");
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:

  let buncha = [];

  for (i = 0; i < data.length; i++){
      // for (w = 0; w < data[i].materials.length; w++){
        if (data[i].materials.length >= 8){
          buncha.push(data[i].title + " has " + data[i].materials.length + " materials:" + data[i].materials);
        }
      // }
  }
  console.log(buncha);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:

  let ifreakindidit = 0;

  for (i = 0; i < data.length; i++){
    if (data[i].who_made === "i_did") {
      ifreakindidit = ifreakindidit + 1;

    }
  }
  console.log(ifreakindidit + " items were made by their sellers")
}
