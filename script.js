//Sets range of numbers for console to print to 1–100//
for (var i=1; i <= 100; i++)
{
    //Sets console to print 'Fizzbuzz' on multiple of 3 and 5//
    if (i % 15 == 0)
        console.log("FizzBuzz");
    //Sets console to print 'Fizz' on multiple of 3//
    else if (i % 3 == 0)
        console.log("Fizz");
    //Sets console to print 'Buzz' on multiple of 5//
    else if (i % 5 == 0)
        console.log("Buzz");
    //Sets console to print print number from range//
    else
        console.log(i);
}