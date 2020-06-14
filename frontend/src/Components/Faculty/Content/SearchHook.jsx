import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default (props) => {
  const [value, setValue] = useState("");
  const valueChangeHandler = (event) => {
    setValue(event.target.value);
    props.onSearch(value);
  };
  const classes = useStyles();

  return (
    <>
      <div>

        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <Input
                type="text"
                onChange={valueChangeHandler}
                value={value}
                id="input-with-icon-grid"
                label="With a grid"
              />
            </Grid>
          <Button onClick={() => props.onSearch(value)}>Поиск</Button>
          </Grid>
        </div>
      </div>
    </>
  );
};
