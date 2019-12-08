# Excercise This Week

## Personal Tasks Tracker
I create it on directory [personalTasksTracker]
Excercise this week is creating API Server for Personal Tasks Tracker and should be :
- Able to add a task(short title and description)
- Able to assign a due date
- Both the task details and due date is editable.
- Able to add a comment to an existing task.
- Able to mark a task as new, in-progress or complete
- Able to see a list of all incomplete tasks (status is new or in-progress)
- Able to see a list of all incomplete tasks due on a particular day

### Approach
First, i create mongooseConnection.js for connect to mongoose
Second, i create handler.js which contains all handler for the route in server.js
Third, i create server.js which contains all server configuration
Fourth, i create index.js for run the server

### Step to run the code
First, u can download this code as [zip] or [tar]
Next :
```sh
$ cd December/week2/personalTasksTracker
$ npm i
$ npm start
```
If u want doing test
```sh
$ npm test
```
### Problem
How to doing transtactions for testing, and creating more test cases

#### Notes
- The authentication is 'user' for username & 'password' for password
- Database for development is 'dkata' and for testing is 'test'
- Logs file in directory logs and naming by date
- (get) / for showing root route
- (get) /api/tasks for showing all undone tasks
- (get) /api/tasks?query for showing tasks with :
    - ?sort=value for sorting by value
    - ?offset=value for starting from value
    - ?limit=value for limit the tasks with value
    - ?filter=value for filtering by value
    - ?dueDate=value for filtering by dueDate=value
- (get) /api/tasks/{id} for showing detail task by id (caching using catBox Redis)
- (post) /api/tasks for creating new task
- (put) /api/tasks/{id} for updating task by id
- (delete) /api/tasks/{id} for deleting task if done by id

#### Things To Do :
- Creating more test cases
- Adding new features

[//]:
   [zip]:<https://gitlab.com/figo.fosandy/weeklyexercise/-/archive/master/weeklyexercise-master.zip>
   [tar]:<https://gitlab.com/figo.fosandy/weeklyexercise/-/archive/master/weeklyexercise-master.tar.gz>
   [personalTasksTracker]:<https://gitlab.com/figo.fosandy/weeklyexercise/tree/master/December/week2/personalTasksTracker>