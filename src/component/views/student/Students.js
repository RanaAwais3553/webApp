import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 240;

 const useStyles = makeStyles((theme) => ({
 // necessary for content to be below app bar
 toolbar: theme.mixins.toolbar,
 drawerPaper: {
   width: drawerWidth,
 },
 content: {
   flexGrow: 1,
   padding: theme.spacing(3),
 }, 
}));

function Students() {
  const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
   <div style={{}}>
            <h1 >
            Students lorem ipsum lorem ipsum
            </h1>
        </div>
        </main>
    )
}
export default Students
