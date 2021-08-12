// Print odds 1-20 version 1

for (var i=1; i<=20; i+=2) {
    console.log(i)
}
// Output:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19


// Print odds 1-20 version 2

for (var j=1; j<21; j++) {
    if (j%2==1) {
        console.log(j)
    }
}

// Output:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19


// Sum and Print 1-5
var sum=0
for (var k=1;k<6;k++) {
    sum = sum+k
    console.log("Num: " +k+", Sum: "+sum)
}

// Output:

// Num: 1, Sum: 1
// Num: 2, Sum: 3
// Num: 3, Sum: 6 
// Num: 4, Sum: 10
// Num: 5, Sum: 15