1) The console will log 3 as vars are not bound to the block scopes
2) The console will log 150 as vars are not bound to the block scopes
3) The console will log 150 as vars are not bound to the block scopes
4) The function will return a list of the discounted final prices as everytime you calculate a final price it will get added to the array.
5) It will return an error as i is declared with let and let is not defined outside of the for loop therefore it will return an error.
6) It will return an error as discountedPrice is declared inside of the for loop by using let thus it is not defined outside of the for loop, so it will return an error.
7) The console will log 150 as final price is declared in the same level as line 14 thus it will log the last final price from the for looop which is 150.
8) This function will return an array of the final discounted prices as they get pushed in the for loop so they will be added.
9) This will return an error similar to question 5.
10) The console will log 3 as length is declared as a const being the length of the array passed which has 3 elements.
11) [50, 100, 150] it works as the const are not changed after being declared, and discountedPrice doesn't exist everytime the for loop starts, thus declaring it doesn't change it.
12) A: student.name
    B: student["Grad Year"]
    C: student.greeting()
    D: student['Favorite Teacher'].name
    E: student['courseLoad'][0]
13) A: 32 as 3 is a string so it converts the 2 to a string and concatenates them
    B: 1 as it would convert the 3 to a number
    C: 3 as it would consider null as equal to 0
    D: 3null as 3 is a string so it would convert null to the string 'null'
    E: 4 as the boolean true is equivalent to 1 thus it would convert true to the number 1
    F: 0 as it would convert false to the number 0 and null to 0
    G: 3undefined as 3 is a string then it would convert undefined to a string 'undefined'
    H: NaN as '3' becomes the number 3 and undefined becomes NaN thus it will return NaN
14) A: true as the string '2' becomes the number 2
    B: false as the lexical order of '1' comes before '2'
    C: true as it would convert '2' to the number 2
    D: false as it would check if they are the same without changing the type and 2 and '2' are different types so they aren't the same
    E: false as the boolean true would become the number 1 which != 2
    F: true as all numbers besides 0, -0, and NaN turn into true
15) == Can convert the objects to the same type such as 2 == '2' would return true as it would change the string '2' to the number 2, where as === does not change the type so the initial inputs have to be the exact same, type and value.
17) The result will be an array with every element doubled, [2, 4, 6] as we will create a new array, then for every element we will push the function of doSomething(element) into the array, and as doSomething doubles the element them it will return the doubled initial array after the for loop.
19) 1 4 3 2