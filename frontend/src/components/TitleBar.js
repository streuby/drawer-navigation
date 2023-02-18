import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";

import logo from "./logos/trans_logo_white_sm.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

const TitleBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <a href="https://streuby.com" target="_blank" rel="noreferrer">
              <img with={60} src={logo} alt="logo" />
            </a>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <a
            href="https://github.com/streuby/react-drawer-navigation"
            target="_blank"
            rel="noreferrer"
          >
            <BottomNavigationAction
              label="Fork ripo"
              value="github"
              icon={<GitHubIcon />}
            />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TitleBar;
