//Sets range of numbers for console to print to 1–100//
for (var i=1; i <= 100; i++) {
    // Create temp variable
    var output = "";
    //Sets console to print 'Fizz' on multiple of 3//
    if (i % 3 == 0) {output += "Fizz";}
    //Sets console to print 'Buzz' on multiple of 5//
    if(i % 5 == 0) {output += "Buzz";}
    //Sets console to print print number from range//
    if(output == ""){output = i;}
    
    console.log(output);
}
