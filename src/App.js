import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Account from './screenViews/views/account/Account.js';
import Dashboard from './screenViews/views/dashboard/Dashboard.js'
import MiniDrawer from './componentsUI/drawer/Drawer.js'
import PrimarySearchAppBar from './componentsUI/appbar/AppBar.js'
import React from "react";
import Result from './screenViews/views/result/Result.js';
import Staff from './screenViews/views/staff/Staff.js'
import Students from './screenViews/views/student/Students.js'
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
      <Router>
      {/* <PrimarySearchAppBar/> */}
      <MiniDrawer/>
      <Switch>
        <Route exact from="/" render={props => <Dashboard {...props} />} />
        <Route exact path="/student" render={props => <Students {...props} />} />
        <Route exact path="/staff" render={props => <Staff {...props} />} />
        <Route exact path="/result" render={props => <Result {...props} />} />
        <Route exact path="/account" render={props => <Account {...props} />} />
     
      </Switch>
      </Router>
    </div>
  );
}
export default App