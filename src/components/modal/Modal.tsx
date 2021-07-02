import { useState, ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { v4 } from "node-uuid";
import {
  DialogTitle,
  DialogActions,
  DialogContent,
  Dialog,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

interface modalProps {
  modalOpen: boolean;
  modalClose: () => void;
}

export const Modal: FC<modalProps> = ({ modalOpen, modalClose }) => {
  const [todo, setTodo] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [dueDate, setDueDate] = useState<string>("");
  const dispatch = useDispatch();

  const handleTodoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(e.target.value.trim());
    setError(false);
  };

  const handleDateChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setError(false);
    setDueDate(e.target.value.trim());
  };

  const handleSubmit = () => {
    const todos: Todo = {
      id: v4(),
      todo: String(todo),
      status: false,
      endDate: Date.parse(String(dueDate)),
    };

    if (!todo || !dueDate || todo.length === 0 || dueDate.length === 0) {
      setError(true);
    } else {
      dispatch(addTask(todos));
      modalClose();
      setTodo("");
      setDueDate("");
    }
  };
  return (
    <Dialog open={modalOpen} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <Typography color="primary">Add A Task</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          error={error}
          autoFocus
          size="small"
          variant="outlined"
          margin="dense"
          id="todo"
          label="Todo"
          type="text"
          fullWidth
          required
          onChange={handleTodoChange}
        />
        <TextField
          error={error}
          autoFocus
          variant="outlined"
          size="small"
          margin="dense"
          id="date"
          label="Due Date"
          InputLabelProps={{ shrink: true }}
          type="date"
          required
          onChange={handleDateChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={modalClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
