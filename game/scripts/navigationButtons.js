// 16x16 grid, say with X and Y coordinates modulo 17

function goNorth() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // If we are on the base camp (iff Y==0), we first pass from (0,0) to (1,1) to compute
    if (currentY == 0) {
	currentX = 1;
	currentY = 1;
    }

    // We increase Y by multiplying with 7 modulo 17
    var newY = currentY*7%17;

    // We store the new coordinates into a new pair of variables
    // If we were going to land on (1,1), we set them to (0,0) instead
    if (currentX == 1 && newY == 1) {
	var finalX = 0;
	var finalY = 0;
    } else {
	var finalX = currentX;
	var finalY = newY;
    }

    // We open the new location with the computed coordinates
    // Unless the new coordinates are not valid places to be
    if (finalX ==
    window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
}

function goSouth() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // If we are on the base camp (iff Y==0), we first pass from (0,0) to (1,1) to compute
    if (currentY == 0) {
	currentX = 1;
	currentY = 1;
    }

    // We decrease Y by dividing by 7 modulo 17
    var newY = currentY*5%17;

    // We store the new coordinates into a new pair of variables
    // If we were going to land on (1,1), we set them to (0,0) instead
    if (currentX == 1 && newY == 1) {
	var finalX = 0;
	var finalY = 0;
    } else {
	var finalX = currentX;
	var finalY = newY;
    }

    // We open the new location with the computed coordinates
    window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
}

function goEast() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // If we are on the base camp (iff Y==0), we first pass from (0,0) to (1,1) to compute
    if (currentY == 0) {
	currentX = 1;
	currentY = 1;
    }

    // We increase X by multiplying with 3 modulo 17
    var newX = currentX*3%17;

    // We store the new coordinates into a new pair of variables
    // If we were going to land on (1,1), we set them to (0,0) instead
    // If we were on the right border of the grid, we swap the Y coordinate
    if (newX == 1 && currentY == 1) {
	var finalX = 0;
	var finalY = 0;
    } else if (currentX == 16) {
	var dictSwapY = {
	    16: 10,
	    12: 2,
	    9: 14,
	    11: 13,
	    4: 6,
	    3: 8,
	    15: 5,
	    7: 1,
	    1: 7,
	    5: 15,
	    8: 3,
	    6: 4,
	    13: 11,
	    14: 9,
	    2: 12,
	    10: 16
	};
	var finalX = newX;
	var finalY = dictSwapY[currentY];
    } else {
	var finalX = newX;
	var finalY = currentY;
    }

    // We open the new location with the computed coordinates
    window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
}

function goWest() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // If we are on the base camp (iff Y==0), we first pass from (0,0) to (1,1) to compute
    if (currentY == 0) {
	currentX = 1;
	currentY = 1;
    }

    // We decrease X by dividing by 3 modulo 17
    var newX = currentX*6%17;

    // We store the new coordinates into a new pair of variables
    // If we were going to land on (1,1), we set them to (0,0) instead
    // If we were on the left border of the grid, we swap the Y coordinate
    if (newX == 1 && currentY == 1) {
	var finalX = 0;
	var finalY = 0;
    } else if (currentX == 14) {
	var dictSwapY = {
	    16: 10,
	    12: 2,
	    9: 14,
	    11: 13,
	    4: 6,
	    3: 8,
	    15: 5,
	    7: 1,
	    1: 7,
	    5: 15,
	    8: 3,
	    6: 4,
	    13: 11,
	    14: 9,
	    2: 12,
	    10: 16
	};
	var finalX = newX;
	var finalY = dictSwapY[currentY];
    } else {
	var finalX = newX;
	var finalY = currentY;
    }

    // We open the new location with the computed coordinates
    window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
}
