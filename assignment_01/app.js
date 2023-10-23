"use strict";

function getTutorialInfo() {
    return {
        exerciseNum: 1,
        groupNames: "Jane Doe, Max Mustermann",
    };
}

// Array that stores the rectangle instances used to draw the bar chart
let BARS = [];


/**
 * Draws the numbers in the data array as a bar chart.
 * Fills the *BARS* array with Two.js rectangle instances.
 *
 * @param {Two} two - Two.js instance
 * @param {Array} data - Array of numbers
 */
function drawStatic(two, data) {

    let posX = 155;
    const posY = 400;
    const barGap = 5;

    // start of our code
    let i = 0;
/*
    while (i < data.length)
    {
        const rect = two.makeRectangle(posX + 2*i*barGap, posY - data[i]/2, 5, data[i])
        if (i % 2 == 0)
        {
            rect.fill = "orange";
        } else {
            rect.fill = "green";
        }
        rect.stroke = "black";
        rect.linewidth = 1;
        i++;
    }
*/
    while (i < 300)
    {
        let height = Math.floor(Math.random() * 350 + 20);
        const rect = two.makeRectangle(posX + 2*i*barGap, posY - height/2, 5, height)
        if (i % 2 == 0)
        {
            rect.fill = "orange";
        } else {
            rect.fill = "green";
        }
        rect.stroke = "black";
        rect.linewidth = 1;
        i++;
    }
    // end of our code
}

/**
 * Draws the objects in the data array as a bar chart and fills the *BARS*
 * array with arrays of Two.js rectangle instances.
 * Each item in the data array is an array itself, which contains objects
 * with the following structure:
 * {
 *   category: <number>,
 *   value: <number>
 * }
 *
 * @param {Two} two - Two.js instance
 * @param {Array} data - Array of arrays of objects
 */

// Our code (getRandom() and getArray()) for testing purposes START
function getRandom(min, max) {
    return Math.floor(Math.random()*(max - min) + min)
}
function getArray(len) {
    let i = 0;
    let arr = [];
    while (i < len) {
        arr.push({value: getRandom(20, 120), category: getRandom(1, 9)});
        i++;
    }
    return arr
}
// Our code (getRandom() and getArray()) for testing purposes END

function drawStaticStacked(two, data) {

    let posX = 155;
    const posY = 500;
    const barGap = 5;

    let colorArray = ["green", "yellow", "blue", "orange", "red", "magenta", "grey", "purple", "black"];
    let i = 0;

    // items array is used for testing 
    let items = [];
    for (let i=0; i < 60; i++) {
        items.push(getArray(5));
    }

    while (i < items.length) {
        let j = 0;
        let vMove = 0;
        while (j < items[i].length) {
            const rect = two.makeRectangle(posX + 2*i*barGap, posY - items[i][j].value/2 - vMove, barGap, items[i][j].value)
            rect.fill = colorArray[items[i][j].category % 9];
            rect.stroke = "black";
            rect.linewidth = 1;
            vMove += items[i][j].value;
            j++;
        }
        i++;
    }
/*
    while (i < 60) {
        let j = 0;
        let vMove = 0;
        let barDiff = Math.floor(Math.random() * 8 + 1 )
        while (j < barDiff) {
            let height = Math.floor(Math.random() * 100 + 20);
            const rect = two.makeRectangle(posX + 2*i*barGap, posY - height/2 - vMove, barGap, height)
            rect.fill = colorArray[j % 9];
            rect.stroke = "black";
            rect.linewidth = 1;
            vMove += height;
            j++;
        }
        i++;
    }
    */
    // TODO: insert code here
}

//-----------------------------------------------------------------------------
// Bonus Task Functions
//-----------------------------------------------------------------------------

/**
 * Draws the numbers in data as a bar chart by updating the
 * respective bars in the *BARS* array.
 * This function is called each iteration of the sorting algorithm
 * until the data is sorted.
 *
 * @param {Array} data - Array of numbers
 * @param {Array} changes - Array of indices where the algorithm changed sth
 * @param {Array} highlights - Array of indices where the algorithm looked
 */
function drawSorting(data, changes, highlights) {

    let posX = 155;
    const posY = 400;
    const barGap = 5;

    // BONUS: insert code here
}

/**
 * Draws the objects in data as a bar chart by updating the
 * respective bars in the *BARS* array.
 * Each item in the data array is an array itself, which contains objects
 * with the following structure:
 * {
 *   category: <number>,
 *   value: <number>
 * }
 *
 * This function is called each iteration of the sorting algorithm
 * until the data is sorted.
 *
 * @param {Array} data - Array of arrays of objects
 * @param {Array} changes - Array of indices where the algorithm changed sth
 * @param {Array} highlights - Array of indices where the algorithm looked
 */
function drawSortingStacked(data, changes, highlights) {

    let posX = 155;
    const posY = 400;
    const barGap = 5;

    // BONUS: insert code here
}
