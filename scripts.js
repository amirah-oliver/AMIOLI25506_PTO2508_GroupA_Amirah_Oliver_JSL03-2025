// ===============================
// Task Entry System (Prompt-Based)
// ===============================

// Array to store all tasks
const tasks = [];

/**
 * Prompt user for a valid task status
 * Only allows: todo, doing, done 
 */
function getValidStatus(taskNumber) {
  let status;

  while (true) {
    status = prompt(
      `Enter task ${taskNumber} status (todo, doing, done):`   
    )?.toLowerCase();

    if (status === "todo" || status === "doing" || status === "done") {
      return status;
    }

    alert("Invalid status. Please enter 'todo', 'doing', or 'done'."); 
  }
}

/**
 * Prompt user for task details and return a task object
 */
function createTask(taskNumber) {
  const title = prompt(`Enter task ${taskNumber} title:`);

  const description = prompt(
    `Enter task ${taskNumber} description:`
  );

  const status = getValidStatus(taskNumber);

  return {
    title,
    description,
    status
  };
}

// ===============================
// Collect Task Data
// ===============================

tasks.push(createTask(1));
tasks.push(createTask(2));

// ===============================
// Log Completed Tasks
// ===============================

const completedTasks = tasks.filter(task => task.status === "done");

if (completedTasks.length > 0) {
  console.log("Completed Tasks:"); 
  completedTasks.forEach((task, index) => {
    console.log(
      `${index + 1}. ${task.title} - ${task.description}`
    );
  });
} else {
  console.log("No tasks completed, let's get to work!"); 
}


const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];


// ===============================
// Initial Task Data
// ===============================

const tasks = [
  {
    id: 1,
    title: "Gym",
    description: "Work those muscles",
    status: "todo",
  },
  {
    id: 2,
    title: "Study",
    description: "Work those brains",
    status: "doing",
  },
  {
    id: 3,
    title: "Sleep",
    description: "Rest that bod",
    status: "done",
  },
];

// ===============================
// Helper Functions
// ===============================

/**
 * Ensures the user enters a valid task status
 */
function getValidStatus(taskNumber) {
  let status;

  while (true) {
    status = prompt(
      `Enter task ${taskNumber} status (todo, doing, done):`
    )?.toLowerCase();

    if (status === "todo" || status === "doing" || status === "done") {
      return status;
    }

    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }
}

/**
 * Creates a new task object with a unique incremental ID
 */
function createTask(taskNumber) {
  const title = prompt(`Enter task ${taskNumber} title:`);
  const description = prompt(`Enter task ${taskNumber} description:`);
  const status = getValidStatus(taskNumber);

  const lastId = tasks[tasks.length - 1].id;

  return {
    id: lastId + 1,
    title,
    description,
    status,
  };
}



// ===============================
// Add Up To 3 New Tasks
// ===============================

const MAX_NEW_TASKS = 3; 

if (tasks.length >= 6) {
  alert(
    "There are enough tasks on your board, please check them in the console." 
  );
} else {
  const availableSlots = MAX_NEW_TASKS;

  for (let i = 1; i <= availableSlots; i++) {
    if (tasks.length >= 6) break;

    const newTask = createTask(i);
    tasks.push(newTask);
  }
}

// ===============================
// Console Logging
// ===============================

// Log all tasks
console.log("All tasks:", tasks);

// Filter completed tasks 
const completedTasks = tasks.filter(task => task.status === "done");

// Log completed tasks 
console.log("Completed tasks:", completedTasks);