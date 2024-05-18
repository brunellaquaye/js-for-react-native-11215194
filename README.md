# js-for-react-native-11215194

# 11215194

## Task 1
- The function, processArray(array) will take in parameters of type array.
- Inside the function, we initialize a newProcessArray [2,3,3,5,7,5,8]
- We use a for loop to iterate through each element of the input array.
- Inside the loop,
If the current element (array[i]) is even (array[i] % 2 === 0), we square it and add the result to processedArray.
If the current element is odd, we triple it and add the result to processedArray.
- After the loop completes, we return the newProcessArray, which will now contain the squared even numbers and tripled odd numbers.

## Task 2
- We declare a function called formatArrayStrings that taked in strings and numbers as parameters.
- We then declare an empty array.
- Using a "for loop" and "if and else" conditionals, we iterate through every element of the array and convert the strings that have a corresponding even number to uppercase characters and convert the strings with a corresponding odd number to lowercase characters.
- The function will return the new array with modified strings.

## Task 3
- We declare a function called createUserProfiles that takes in "strings" and "modifiedName" as parameters.
- We then create and initialize an empty array.
- The "for loop" is used to iterate through the array created.

- Inside the loop, we create an object for each name with the following properties:
id: Set to the current loop index plus 1 (to start IDs from 1).
originalName: Set to the current element from the originalNames array.
modifiedName: Set to the current element from the modifiedNames array.
Add the created object to the userProfiles array.
Return the Array of Objects:

After the loop completes, return the newuserProfiles array, which now contains the user profile objects with the specified properties.
