"use strict";


function getTutorialInfo() {
    return {
        exerciseNum: 2,  //make sure that this is the right number of the current exercise
        groupNames: "Muzaffari Ramdas Zhou", //provide the names of each team member
    };
}
let xCor = 0;
let yCor = 50;
let heightOfBox = 0;
function draw(two) {
  makeBGDots(two);
  // get data
  const pokemons_per_type = getData();
  // logging the data to console (you can remove this code or comment it out)
  const pokemon_types = Object.keys(pokemons_per_type);
  let box = 0;
  for(const type of pokemon_types){
    yCor = 50;
    if (box % 3 == 1)
    {
      xCor = 350;
      const rect = two.makeRectangle(212.5 + xCor, heightOfBox + 115, 200, 155);
      rect.stroke = "black";
      rect.linewidth = 2;
      makeRectForType(two, type);
    }else if (box%3 == 2){
      xCor = 675;
      const rect = two.makeRectangle(212.5 + xCor, heightOfBox + 115, 200, 155);
      rect.stroke = "black";
      rect.linewidth = 2;
      makeRectForType(two, type);
    }else{
      xCor = 0;
      if (box != 0)
      {
        heightOfBox += 170;
      }

      const rect = two.makeRectangle(212.5, heightOfBox + 115, 200, 155);
      rect.stroke = "black";
      rect.linewidth = 2;
      makeRectForType(two, type);
    }
    console.log('TYPE 1: ' + type + ' [color: ' + getColorMap()[type] + ']');
    const mons = pokemons_per_type[type];
    makeCirclesForMons(two, mons);
    box++;
  }
}


/**
 * Creates a group that contains a Rectangle and a label in the lower right corner that tells the type.
 * @param {Two} two 
 *    the two.js object to create shapes with
 * @param {String} type 
 *    the pokemon type 
 * @returns a group containing the shapes created by this method
 */
function makeRectForType(two, type) {
  /* put your code for part d) here */
  const hst = two.makeRectangle(290 + xCor, heightOfBox + 180, 40, 20);
  hst.fill = getColorMap()[type];
  let text = new Two.Text(getTypeAbbrv()[type], 290 + xCor, heightOfBox + 180);
  text.alignment = 'center';
  text.weight = 1000;
  let group = two.makeGroup(hst, text);
  two.add(group);
}


/**
 * Creates a group that contains a circle for each pokemon in the array.
 * The circles are arranged in a 6x6 grid and colored according to the 
 * type2 of the corresponding pokemon.
 * @param {Two} two 
 *    the two.js object to create shapes with
 * @param {Array.<{name: String, id: int, type2: String}>} mons 
 *    the array of pokemons to create circles for
 * @returns a group containing the shapes created by this method
 */
function makeCirclesForMons(two, mons) {
  /* put your code for part c) here */
  
  let circlesInOneRow = 0;
  for(const mon of mons){
    xCor += 25;
    // Checing for max 8 circles in one row
    if (circlesInOneRow > 7) {
      yCor += 25;
      if (xCor <= 375) {
        xCor = 25;
      } else if (xCor <= 700) {
        xCor = 375;
      } else {
        xCor = 700;
      }
      circlesInOneRow = 0;
    }
    circlesInOneRow++;
    makeCircleForMon(two, mon);
  }
}


/**
 * Creates a group containing a circle that is colored according to the type2 of the pokemon.
 * @param {Two} two
 *    the two.js object to create shapes with
 * @param {{name: String, id: int, type2: String}} mon
 *    the pokemon for which a circle is generated
 * @returns a group containing the shapes created by this method 
 */
function makeCircleForMon(two, mon) {
  /* put your code for part b) here */
  console.log(xCor, yCor);
  let crcle = two.makeCircle(xCor + 100, yCor + heightOfBox, 10);
  crcle.fill = getColorMap()[mon.type2];
}


/**
 * Creates a grid consisting of small dots.
 * @param {Two} two
 *    the two.js object to create shapes with
 * @returns a group containing the shapes created by this method
 */
function makeBGDots(two) {
  const group = two.makeGroup();
  for(var row=0; row<50; row++){
    for(var col=0; col<50; col++){
      const rect = two.makeRectangle(col*22, row*22, 1, 1);
      rect.stroke = rect.fill = '#778899'
      group.add(rect);
    }
  }
  group.translation.set(13, 13);
  return group;
}


