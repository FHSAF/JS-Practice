"use strict";

// array of bars
let BARS = [];
// height per bar
let HEIGHTS = [];

// number of bars
const barCount = 24;
// gap between bars in pixels
const barGap = 10;
// index of the deviant bar
let deviantBar = 0;
// height deviation in pixels
let deviation = 50;

// maximum allowed bar height
let barMaxHeight, barWidth;

// for how long to show the blank distractor
const blankTime = 150;
// for how long to show the bar chart scene
const barTime = 2000;

function getTutorialInfo() {
    return {
        exerciseNum: 3,  // make sure that this is the right number of the current exercise
        groupNames: "Muzaffari, Zhou", // provide the names of each team member
        isAnimated: true  // if set to true, shapes will be rendered continously
    };
}

/**
 * Generate a random integer in the specified range.
 * @param {Number} min - the minimum value
 * @param {Number} maxExclusive - the maximum value (not included)
 * @returns an integer
 */
function randomInt(min, maxExclusive) {

    // TODO: insert code here
    return Math.floor(Math.random()*(maxExclusive - min) + min)
    /*
    
    */
}

/**
 * Generate an array of length "len" filled with random integers
 * in the specified range of values.
 * @param {Number} len - array size
 * @param {Number} min - the minimum value
 * @param {Number} maxExclusive - the maximum value (not included)
 * @returns an array
 */
function randomArray(len, min, maxExclusive) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(randomInt(min, maxExclusive));
    }
    return arr;
}

/**
 * Called once on startup. Populates the *BARS* array with Two.js rectangle
 * instances and fills the *HEIGHTS* array with a height value for each bar.
 * It also binds a callback to the *update* function of the Two.js instance,
 * which switches between drawing the blank scene, drawing the bars (normally),
 * drawing the bars with one height changed and then drawing the blank scene again.
 *
 *
 * @param {Two} two - Two.js instance
 * @param {Number} width - drawing area width
 * @param {Number} height - drawing area height
 */
function draw(two, width, height) {

    // TODO: insert code here
    let xMove = 0;
    let sum = 0;
    HEIGHTS = randomArray(barCount, barGap, height);
    console.log(HEIGHTS, width);
    for (let i=0; i < barCount; i++)
    {
        BARS[i] = two.makeRectangle(50+xMove, 600-HEIGHTS[i]/2, (width - 230)/barCount, HEIGHTS[i]);
        xMove += barGap + (width - 230)/barCount;
        BARS[i].fill = getColorScale(i);
    }

    two.bind('update', (frameCount, deltaTime) => {
        sum += deltaTime;
        if (sum <= barTime) {
            // BARS[deviantBar] = (width - 230) / barCount;
            BARS[deviantBar].height = HEIGHTS[deviantBar];
            BARS[deviantBar].fill = getColorScale(deviantBar);
        } else if (sum <= barTime + blankTime) {
            // BARS[deviantBar].height = 0;
            // BARS[deviantBar].width = 0;
            BARS[deviantBar].fill = "white";
        } else if (sum <= (2*barTime + blankTime)){
            // BARS[deviantBar] = (width - 230) / barCount;
            BARS[deviantBar].height = HEIGHTS[deviantBar] + deviation;
            BARS[deviantBar].fill = getColorScale(deviantBar);
            // BARS[deviantBar].width = (width - 230)/barCount;
        } else if (sum <= 2*(barTime + blankTime)) {
            // BARS[deviantBar].height = 0;
            // BARS[deviantBar].width = 0;
            BARS[deviantBar].fill = "white";
        } else {
            sum = 0;
        }
    });
}
