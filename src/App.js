import {BrowserRouter, Route, Switch} from "react-router-dom";

import Account from './component/views/account/Account';
import Dashboard from './component/views/dashboard/Dashboard'
import PrimarySearchAppBar from './component/appbar/AppBar'
import React from "react";
import Result from './component/views/result/Result';
import Staff from './component/views/staff/Staff'
import Students from './component/views/student/Students'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

 function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PrimarySearchAppBar/>
      <BrowserRouter>
      <Switch>
        <Route exact from="/" Component={Dashboard} />
        <Route exact path="/student" render={props => <Students {...props} />} />
        <Route exact path="/staff" render={props => <Staff {...props} />} />
        <Route exact path="/result" render={props => <Result {...props} />} />
        <Route exact path="/account" render={props => <Account {...props} />} />
     
      </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App