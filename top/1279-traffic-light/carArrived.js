// https://leetcode.ca/2019-06-01-1279-Traffic-Light-Controlled-Intersection/
let currentRoad = 'A',
    nextRoad = 'B';
function carArrived(carId, roadId, direction, turnGreen, crossCar) {}


/**
 * Input: cars = [1,3,5,2,4], directions = [2,1,2,4,3], arrivalTimes = [10,20,30,40,50]
 * 
 * Output: [
	"Car 1 Has Passed Road A In Direction 2",    // Traffic light on road A is green, car 1 can cross the intersection.
	"Car 3 Has Passed Road A In Direction 1",    // Car 3 crosses the intersection as the light is still green.
	"Car 5 Has Passed Road A In Direction 2",    // Car 5 crosses the intersection as the light is still green.
	"Traffic Light On Road B Is Green",          // Car 2 requests green light for road B.
	"Car 2 Has Passed Road B In Direction 4",    // Car 2 crosses as the light is green on road B now.
	"Car 4 Has Passed Road B In Direction 3"     // Car 4 crosses the intersection as the light is still green.
	]
 */
