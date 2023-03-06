import Task from "../model/taskModel.js";

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).res.json({ msg: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).res.json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task with id ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task with id ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true
    });
     if (!task) {
       return res.status(404).json(`No task with id ${id}`);
     }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export { createTask, getTasks, getTask, deleteTask, updateTask };
