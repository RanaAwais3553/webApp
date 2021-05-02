import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from '../../../AllStyle.js';
import CardHeader from "../../../componentFunction/Card/CardHeader.js";
import Table from "../../../componentFunction/Table/Table.js";
import CardBody from "../../../componentFunction/Card/CardBody.js";
import DataTable from '../../../componentsUI/table/AllStudentsTable.js'
import GridItem from "../../../componentFunction/Grid/GridItem.js";
import GridContainer from "../../../componentFunction/Grid/GridContainer.js";
import AdmissionForm from '../../../componentsUI/admissionForm/AdmissionForm.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.content}>
            <div className={classes.toolbar} />
            <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
      <AppBar position="static" color="default" style={{width:'80%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="#fff"
          aria-label="scrollable force tabs example"
        >
          <Tab label="All Student" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Fee Defaulter" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Absent Student" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Fee Submission" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Add Student" icon={<HelpIcon />} {...a11yProps(4)} />
        
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <DataTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <DataTable/>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <DataTable/>

      </TabPanel>
      <TabPanel value={value} index={3}>
       <AdmissionForm/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      </GridItem>
      </GridContainer>
    </div>
  );
}
