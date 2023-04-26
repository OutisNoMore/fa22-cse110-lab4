# Lab 4 Part 2

1. 3 because i is declared as a var, the final value of i before it terminates the for loop.
2. 150 because discountedPrices is declared as a var
3. 150 because finalPrice is declared as a var
4. [50, 100, 150] - array of all updated/discounted values  
5. Error because i has not been defined at that scope - i only exists in the for loop
6. Error because discountedPrices has not been defined at that scope - it only exists in the for loop
7. 150 because finalPrice was defined at function scope.
8. [50, 100, 150] because array was defined at function scope, so all updates remain
9. Error because i has not been defined at that scope - i only exists in the for loop
10. 3 will be printed because length was defined at that scope
11. [50, 100, 150]  because the array was defined at function scope, it is still the same array with updated values
12.
  A. student.name

  B. student.'Grad Year'

  C. student.greeting()

  D. student.'Favorite Teacher'.name

  E. student.courseLoad[0]

13.
  A. 32 concatenates 2 to 3 as a string

  B. 1 casts 3 as a number

  C. 3 treats null as 0

  D. 3null, concatenates null as a string

  E. 4, treats true as 1

  F. 0 - treats false and null as 0

  G. 3undefined concatenates undefined to 3 as a string

  H. NaN - tries to subtract undefined from 3, but undefined is not a number

14.
  A. True, '2' treated as number

  B. False, does string comparison, and length of 2 is less than 12 and 
  so 2 is greater than 2

  C. True does typeless comparison between 2 and 2

  D. False, does strict comparison between types as well

  E. False, does compare between 1 and 2

  F. True, boolean 2 is true because it is not 0

15. == does not compare type and only checks same value, while === compares for same type and value
16. 
```
for (let key in statistics) {
  if (key[0] == 'r') {
    console.log(statistics[key]);
  }
}
```
17. [2, 4, 6], first the modifyArray function is called which loops through each number in the passed array. Then, modifyArray passes each number to the callback function, doSomething, which doubles each number. The doubled number is then stored in the output array.
18.
```
setInterval(()=>{ console.log(new Date().toLocaleTimeString()); }, 1000);
```

19. First the function prints 1 when called, followed by 4 then 3, then after about a second since calling the function prints 2.
