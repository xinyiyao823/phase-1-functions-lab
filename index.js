// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const distance = 42;
    if (block > distance) {
        return block - distance;
    } else {
    return distance - block;
    }

}

function distanceFromHqInFeet(block) {
    const distance = 42;
    if (block > distance) {
        return (block - distance) * 264;
    } else {
        return (distance - block) * 264;
    }

}

function distanceTravelledInFeet(block1, block2) {
    if (block2 > block1) {
        return (block2 - block1) * 264;
    } else {
        return (block1 - block2) * 264;
    }
}

function calculatesFarePrice(block1, block2) {
    const dist = Math.abs(block1 - block2) * 264;
    if (dist < 400) {
        let fare = 0 * dist;
        return fare;
    }  else if (dist >= 400 && dist < 2000 ) {
        return 0.02 * (dist - 400);
    } else if (dist > 2000 && dist <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}