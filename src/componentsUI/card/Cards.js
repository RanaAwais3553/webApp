import React from "react";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Face from "@material-ui/icons/Face";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridItem from "../../componentFunction/Grid/GridItem.js";
import GridContainer from "../../componentFunction/Grid/GridContainer.js";
import Danger from "../../componentFunction/Typography/Danger.js";
import Card from "../../componentFunction/Card/Card.js";
import CardHeader from "../../componentFunction/Card/CardHeader.js";
import CardIcon from "../../componentFunction/Card/CardIcon.js";
import CardFooter from "../../componentFunction/Card/CardFooter.js";
import useStyles from '../../AllStyle.js';

function Cards() {
  const classes = useStyles();

return (
<GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Face/>
              </CardIcon>
              <p className={classes.cardCategory}>Students</p>
              <h1 className={classes.cardTitle}>
                149/150 <small>Present</small>
              </h1>
            </CardHeader>
            <CardFooter   stats>
            <div className={classes.stats}>
            <Face/>
              <a href="#" style={{textDecoration:'none',color:"#999"}}>  See More</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Teachers</p>
              <h1 className={classes.cardTitle}>
                14/15 <small>Present</small>
              </h1>
            </CardHeader>
            <CardFooter   stats>
            <div className={classes.stats}>
            <Store />
              <a href="#" style={{textDecoration:'none',color:"#999"}}>  See More</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <AttachMoney/>
              </CardIcon>
              <p className={classes.cardCategory}>Fee Submission</p>
              <h3 className={classes.cardTitle}>75/150</h3>
            </CardHeader>
            <CardFooter   stats>
            <div className={classes.stats}>
            <AttachMoney/>
              <a href="#" style={{textDecoration:'none',color:"#999"}}>  See More</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>New Admissions</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
  )
}

export default Cards
