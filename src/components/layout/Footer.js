import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";



const footer = props => (
  <div>
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab key='1' label='One' />;
        <Tab key='2' label='Two' />;
        <Tab key='3' label='Three' />;

      </Tabs>
    </Paper>
  </div>
);

export default footer;
