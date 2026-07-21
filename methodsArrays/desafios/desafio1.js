const users = [
  {
    id: 1,
    name: "William",
    tasks: [
      { title: "Estudar JS", completed: true },
      { title: "Estudar Node", completed: false },
      { title: "Treinar SQL", completed: true },
    ],
  },
  {
    id: 2,
    name: "Maria",
    tasks: [
      { title: "Ler documentação", completed: false },
      { title: "Criar API", completed: false },
    ],
  },
  {
    id: 3,
    name: "João",
    tasks: [],
  },
];

const result = users.map((user) => {
  const tasks = user.tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.pending += 1;
      }
      return acc;
    },
    { completed: 0, pending: 0 }
  );

  return {
    name: user.name,
    totalTasks: user.tasks.length,
    completed: tasks.completed,
    pending: tasks.pending,
  };
});

console.log(result);

// [
//   { name: 'William', totalTasks: 3, completed: 2, pending: 1 },
//   { name: 'Maria', totalTasks: 2, completed: 0, pending: 2 },
//   { name: 'João', totalTasks: 0, completed: 0, pending: 0 }
// ]
