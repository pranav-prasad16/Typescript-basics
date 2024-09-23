var score = 4;
score = '40';
var pranav = { name: 'pro', age: 21 };
pranav = { userName: 'pp', age: 12 };
function getDbId(id) {
    if (typeof id === 'string')
        id.toLowerCase(); // if the received parameter id is string
    else
        id + 3; // if the received parameter id is number
}
getDbId(4);
getDbId('10');
var data1 = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, '2', 3];
var seatAllocation;
seatAllocation = 'middle';
// seatAllocation = 'pilot';
