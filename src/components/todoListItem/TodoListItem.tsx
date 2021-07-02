import { FC, ChangeEvent } from "react";
import {
  makeStyles,
  IconButton,
  Checkbox,
  Typography,
  Grid,
  Paper,
  Chip,
  createStyles,
  Theme
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../redux/actions";

interface TodoListItemProps {
  todo: Todo;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 5,
    },
    title: {
      fontSize: "0.8rem",
      paddingTop: "0.6em",
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      background: "#d7ebfd",
      borderLeftRadius: 10,
      borderLeftWidth: 4,
      borderWidth: 0,
    },
  })
);
export const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
    dispatch(deleteTask(todo.id));
  };
  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(completeTask(todo.id));
  };
  const today = new Date();
  const date = new Date(todo.endDate);
  const formatDate = date.toDateString();
  const classes = useStyles();
  const timeDeffeance = today.getTime() < date.getTime();

  return (
    <Grid container className={classes.container} spacing={1}>
      <Grid item xs={12}>
        <Paper
          elevation={2}
          variant="outlined"
          square
          className={classes.paper}
          style={
            timeDeffeance
              ? { borderColor: "#0CA90F" }
              : { borderColor: "#F35836" }
          }
        >
          <Grid justify="space-between" container>
            <Grid item md={10} sm={10} xs={9} container justify="space-between">
              <Grid item>
                <Checkbox
                  onChange={onCheck}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  checked={todo.status}
                  size="small"
                />
              </Grid>
              <Grid
                spacing={1}
                container
                md={10}
                sm={10}
                xs={10}
                item
                direction="column"
              >
                <Grid item>
                  {" "}
                  <Typography
                    variant="h6"
                    className={classes.title}
                    style={
                      todo.status
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                    color="primary"
                  >
                    {todo.todo}
                  </Typography>
                </Grid>
                <Grid item>
                  <Chip
                    variant="outlined"
                    size="small"
                    color="primary"
                    label={formatDate}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton
                onClick={handleDeleteTask}
                size="small"
                aria-label="delete"
              >
                <Delete color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
