// 16x16 grid, say with X and Y coordinates modulo 17

/* CONTENTS OF THIS FILE:
 *
 * isMountain(X,Y) ------ line 16
 * isLake(X,Y) ---------- line 109
 * isBlackHole(X,Y) ----- line 194
 *
 * goNorth() ------------ line 208
 * goSouth() ------------ line 245
 * goEast() ------------- line 282
 * goWest() ------------- line 341
 *
 */

function isMountain(X,Y) {
    // Written all out manually to ensure this also works on IE8 (indexOf wouldn't)
    if (X == 14) {
	if (Y == 16) {
	    return true;
	} else if (Y == 12) {
	    return true;
	} else if (Y == 11) {
	    return true;
	} else if (Y == 3) {
	    return true;
	} else if (Y == 1) {
	    return true;
	} else if (Y == 5) {
	    return true;
	} else if (Y == 8) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 7) {
	if (Y == 13) {
	    return true;
	}
    } else if (X == 4) {
	if (Y == 15) {
	    return true;
	} else if (Y == 14) {
	    return true;
	}
    } else if (X == 12) {
	if (Y == 11) {
	    return true;
	} else if (Y == 4) {
	    return true;
	} else if (Y == 3) {
	    return true;
	}
    } else if (X == 10) {
	if (Y == 15) {
	    return true;
	} else if (Y == 7) {
	    return true;
	} else if (Y == 1) {
	    return true;
	}
    } else if (X == 5) {
	if (Y == 16) {
	    return true;
	} else if (Y == 1) {
	    return true;
	} else if (Y == 13) {
	    return true;
	} else if (Y == 14) {
	    return true;
	} else if (Y == 2) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 15) {
	if (Y == 12) {
	    return true;
	} else if (Y == 7) {
	    return true;
	}
    } else if (X == 11) {
	if (Y == 12) {
	    return true;
	} else if (Y == 5) {
	    return true;
	} else if (Y == 13) {
	    return true;
	}
    } else if (X == 16) {
	if (Y == 12) {
	    return true;
	} else if (Y == 15) {
	    return true;
	} else if (Y == 7) {
	    return true;
	} else if (Y == 1) {
	    return true;
	} else if (Y == 8) {
	    return true;
	} else if (Y == 13) {
	    return true;
	}
    } else {
	return false;
    }
}

function isLake(X,Y) {
    // Same comment as for isMountain(X,Y)
    if (X == 12) {
	if (Y == 16) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 2) {
	if (Y == 16) {
	    return true;
	} else if (Y == 12) {
	    return true;
	} else if (Y == 2) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 6) {
	if (Y == 16) {
	    return true;
	} else if (Y == 12) {
	    return true;
	} else if (Y == 9) {
	    return true;
	} else if (Y == 14) {
	    return true;
	} else if (Y == 2) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 1) {
	if (Y == 16) {
	    return true;
	} else if (Y == 12) {
	    return true;
	} else if (Y == 9) {
	    return true;
	} else if (Y == 14) {
	    return true;
	} else if (Y == 2) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 3) {
	if (Y == 16) {
	    return true;
	} else if (Y == 12) {
	    return true;
	} else if (Y == 9) {
	    return true;
	} else if (Y == 14) {
	    return true;
	} else if (Y == 2) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 9) {
	if (Y == 16) {
	    return true;
	} else if (Y == 12) {
	    return true;
	} else if (Y == 14) {
	    return true;
	} else if (Y == 2) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else if (X == 10) {
	if (Y == 14) {
	    return true;
	} else if (Y == 2) {
	    return true;
	} else if (Y == 10) {
	    return true;
	}
    } else {
	return false;
    }
}

function isBlackHole(X,Y) {
    if (X == 14 && Y == 13) {
	return true;
    } else if (X == 1 && Y == 4) {
	return true;
    } else if (X == 5 && Y == 7) {
	return true;
    } else if (X == 11 && Y == 2) {
	return true;
    } else {
	return false;
    }
}

function goNorth() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // We increase Y by multiplying with 7 modulo 17
    var newY = currentY*7%17;

    // We store the new coordinates into a new pair of variables
    var finalX = currentX;
    var finalY = newY;

    // We open the new location with the computed coordinates
    // Unless the new coordinates are not valid places to be
    if (isMountain(finalX,finalY)) {
	alert("Sorry, you cannot climb up the mountain.");
    } else if (isLake(finalX,finalY)) {
	alert("Sorry, you cannot swim in the lake.");
    } else if (isBlackHole(finalX,finalY)) {
	alert("You see a black hole ahead of you. You better chose a different direction to go!");
    } else {
	window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
    }
}

function goSouth() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // We decrease Y by dividing by 7 modulo 17
    var newY = currentY*5%17;

    // We store the new coordinates into a new pair of variables
    var finalX = currentX;
    var finalY = newY;

    // We open the new location with the computed coordinates
    // Unless the new coordinates are not valid places to be
    if (isMountain(finalX,finalY)) {
	alert("Sorry, you cannot climb up the mountain.");
    } else if (isLake(finalX,finalY)) {
	alert("Sorry, you cannot swim in the lake.");
    } else if (isBlackHole(finalX,finalY)) {
	alert("You see a black hole ahead of you. You better chose a different direction to go!");
    } else {
	window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
    }
}

function goEast() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // We increase X by multiplying with 3 modulo 17
    var newX = currentX*3%17;

    // We store the new coordinates into a new pair of variables
    // If we were on the right border of the grid, we swap the Y coordinate
    if (currentX == 16) {
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
    // Unless the new coordinates are not valid places to be
    if (isMountain(finalX,finalY)) {
	alert("Sorry, you cannot climb up the mountain.");
    } else if (isLake(finalX,finalY)) {
	alert("Sorry, you cannot swim in the lake.");
    } else if (isBlackHole(finalX,finalY)) {
	alert("You see a black hole ahead of you. You better chose a different direction to go!");
    } else {
	window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
    }
}

function goWest() {
    // We collect our current (X,Y) position into variables
    var currentX = parseInt(window.location.href.split("_")[1]);
    var currentY = parseInt(window.location.href.split("_")[2]);

    // We decrease X by dividing by 3 modulo 17
    var newX = currentX*6%17;

    // We store the new coordinates into a new pair of variables
    // If we were on the left border of the grid, we swap the Y coordinate
    if (currentX == 14) {
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
    // Unless the new coordinates are not valid places to be
    if (isMountain(finalX,finalY)) {
	alert("Sorry, you cannot climb up the mountain.");
    } else if (isLake(finalX,finalY)) {
	alert("Sorry, you cannot swim in the lake.");
    } else if (isBlackHole(finalX,finalY)) {
	alert("You see a black hole ahead of you. You better chose a different direction to go!");
    } else {
	window.location.href = "_" + finalX.toString() + "_" + finalY.toString() + "_.html"; 
    }
}
