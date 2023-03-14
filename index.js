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
  if (distanceTravelledInFeet(Math.abs(start-destination)*264) <=400){
    return 0;
  } else if (distanceTravelledInFeet(Math.abs(start-destination)*264) <=2000){
    return (Math.abs(start - destination) * 264)-(400)*(0.02);
  } else if (distanceTravelledInFeet(Math.abs(start-destination)*264) <=2500){
    return (Math.abs(start - destination) * 264 *25);
  } else return 'cannot travel that far';
}

distanceTravelledInFeet(start=38, destination=34);
distanceFromHqInBlocks(someValue = 50);
