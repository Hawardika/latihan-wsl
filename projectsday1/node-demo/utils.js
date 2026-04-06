exports.randomTask = () => {
  const tasks = ["Ngoding", "Push ke GitHub", "Belajar Node"];
  return tasks[Math.floor(Math.random() * tasks.length)];
};
