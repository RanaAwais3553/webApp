import {BrowserRouter, Route, Switch} from "react-router-dom";

import Account from './../views/account/Account';
import Dashboard from '../views/dashboard/Dashboard'
import PrimarySearchAppBar from '../appbar/AppBar'
import React from "react";
import Result from './../views/result/Result';
import Staff from '../views/staff/Staff'
import Students from '../views/student/Students'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

 function Main() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PrimarySearchAppBar/>
      <Switch>
        <Route exact from="/" Component={Dashboard} />
        <Route exact path="/student" render={props => <Students {...props} />} />
        <Route exact path="/staff" render={props => <Staff {...props} />} />
        <Route exact path="/result" render={props => <Result {...props} />} />
        <Route exact path="/account" render={props => <Account {...props} />} />
     
      </Switch>
    </div>
  );
}
export default Main