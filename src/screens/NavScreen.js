import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { Tabs, Tab } from "@material-ui/core";

import NavigationBar from "../components/Navbar";
import DrawerNavigation from "../components/DrawerNavigation";
import TabNavigation from "../components/TabNavigation";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: useTheme().spacing(4),
    backgroundColor: useTheme().palette.background.paper,
  },
  inner: {
    margin: useTheme().spacing(4),
  },
}));

const NavScreen = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { title: "Drawer Navigation", content: <DrawerNavigation /> },
    { title: "Navigation Bar", content: <NavigationBar /> },
    { title: "Tab Navigation", content: <TabNavigation /> },
  ];

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.title}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </Tabs>
      <div className={classes.inner}>{tabs[selectedTab].content}</div>
    </div>
  );
};

export default NavScreen;
