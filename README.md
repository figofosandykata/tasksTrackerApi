# weeklyExercise

# Challenges
As a game developer, I want to take a player’s input so that it will convert from the initial state to the final state.
Note: Given the initial state and target state, your program should output the steps needed to go from initial state to target state
Example 1:
Initial state: [[Yellow, Yellow, Red], [Yellow, Red], [Red], [Red], [Yellow, Red], [Yellow, Yellow, Red]]
Target state: target: [[Red, Red, Red], [Red, Red], [Red], [Red], [Red, Red], [Red, Red, Red]]
Output :
Step 1: map {Yellow}-->{Red}
Example 2:
Initial state: [[Yellow, Yellow, Red], [Yellow, Red], [Red], [Red], [Yellow, Red], [Yellow, Yellow, Red]]
Target state: target: [[Red], [Red], [Red], [Red], [Red], [Red]]
Output:
Step 1: map(reject({Yellow})

# Solution
I created my solution in branch novWeek4
First : I created file posible.js contains all posibility function
Second : I created file solution.js contains function to trying all posibility
Third : For each level i created own solutions named solutionLevelX.js based on solution.js

# Problem
I made many repetitive functions & i fix it when I realize it, so maybe there is still repetitive functions
All posibilty function work, but when i trying all on solution.js, i got a bug for function MapReverse,
if i fix it, it will reverse the initial state, so it impacts to other, so i'll give output 'No Solution or the solution need map reverse'

# Step to run the codes
node log.js

# Note 
I created file excercise.test.js to test all program with JEST
I created file log.js to test all program and get the output from console
