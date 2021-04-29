import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Account from './component/views/account/Account';
import Dashboard from './component/views/dashboard/Dashboard'
import MiniDrawer from './component/drawer/Drawer'
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
      <Router>
      <PrimarySearchAppBar/>
      {/* <MiniDrawer/> */}
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