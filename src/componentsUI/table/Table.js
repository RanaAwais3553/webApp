import React from "react";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../componentFunction/Grid/GridItem.js";
import GridContainer from "../../componentFunction/Grid/GridContainer.js";
import Table from "../../componentFunction/Table/Table.js";
import Tasks from "../../componentFunction/Tasks/Tasks.js";
import CustomTabs from "../../componentFunction/CustomTabs/CustomTabs.js";
import Card from "../../componentFunction/Card/Card.js";
import CardHeader from "../../componentFunction/Card/CardHeader.js";
import CardBody from "../../componentFunction/Card/CardBody.js";
import useStyles from '../../AllStyle.js';
import { bugs, website, server } from "../../componentFunction/dashboardFunctions/VariableGeneral.js";

function Tables() {
  const classes = useStyles();

  return (
    <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
      <CustomTabs
        title="Student:"
        headerColor="primary"
        tabs={[
          {
            tabName: "Absent",
            tabIcon: BugReport,
            tabContent: (
              <Table
              tableHeaderColor="warning"
              tableHead={["ID", "Name", "Class", "Country"]}
              tableData={[
                ["1", "Dakota Rice", "Matric", "Niger"],
                ["2", "Minerva Hooper", "Matric", "Curaçao"],
                ["3", "Sage Rodriguez", "Matric", "Netherlands"],
                ["4", "Philip Chaney", "Matric", "Korea, South"]
              ]}
            />
            )
          },
          {
            tabName: "Failure",
            tabIcon: Code,
            tabContent: (
              <Table
            tableHeaderColor="warning"
            tableHead={["ID", "Name", "Subject", "Marks"]}
            tableData={[
              ["1", "Dakota Rice", "Urdu", "25/50"],
              ["2", "Minerva Hooper", "Urdu", "25/50"],
              ["3", "Sage Rodriguez", "Urdu", "25/50"],
              ["4", "Philip Chaney", "Urdu", "25/50"]
            ]}
          />
            )
          },
          {
            tabName: "Fee Defaulter",
            tabIcon: Cloud,
            tabContent: (
              <Table
            tableHeaderColor="warning"
            tableHead={["ID", "Name", "Class", "Fee"]}
            tableData={[
              ["1", "Dakota Rice", "Matric", "2000-/"],
              ["2", "Minerva Hooper", "Matric", "2000-/"],
              ["3", "Sage Rodriguez", "Matric", "2000-/"],
              ["4", "Philip Chaney", "Matric", "2000-/"]
            ]}
          />
            )
          }
        ]}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={6}>
      <Card>
        <CardHeader color="warning">
          <h2 className={classes.cardTitleWhite}>Staff Status</h2>
          <p className={classes.cardCategoryWhite}>
            New employees on 15th September, 2016
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={["ID", "Name", "Class", "Designation"]}
            tableData={[
              ["1", "Dakota Rice", "Matric", "Niger"],
              ["2", "Minerva Hooper", "Matric", "Curaçao"],
              ["3", "Sage Rodriguez", "Matric", "Netherlands"],
              ["4", "Philip Chaney", "Matric", "Korea, South"]
            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
  )
}

export default Tables
