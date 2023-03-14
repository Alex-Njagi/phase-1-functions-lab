// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return (Math.abs(someValue - 42));
  }

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, destination) {
  return (Math.abs(start - destination)) * 264;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance<=400){
    return 0;
  } else if (distance > 400 && distance <=2000){
    return (distance-400)*.02;
  } else if (distance >2000 && distance <=2500){
    return 25;
  } else return 'cannot travel that far';
}

distanceTravelledInFeet(start=38, destination=34);
distanceFromHqInBlocks(someValue = 50);
