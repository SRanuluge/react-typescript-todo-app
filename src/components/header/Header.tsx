import { FC } from "react";
import { IconButton, Typography, Grid, Fab } from "@material-ui/core";
import { Add, ArrowDownward, ArrowUpwardSharp } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { ascendingList, descendingList } from "../../redux/actions";

interface handleButtonProps {
  handleButton: () => void;
}

const Header: FC<handleButtonProps> = ({ handleButton }) => {
  const dispatch = useDispatch();
  const handleAscending = () => {
    dispatch(ascendingList());
  };

  const handleDecending = () => {
    dispatch(descendingList());
  };
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      style={{ paddingTop: "1em" }}
    >
      <Grid item>
          <Fab onClick={handleButton} size="small" color="primary"> 
            <Add />
          </Fab>
      </Grid>
      <Grid>
        <Typography color="primary" variant="h6">
          To Do List
        </Typography>
      </Grid>
      <Grid style={{ display: "flex" }} item>
        <Grid item>
          <IconButton onClick={handleAscending} size="small">
            <ArrowDownward color="primary" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={handleDecending} size="small">
            <ArrowUpwardSharp color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
