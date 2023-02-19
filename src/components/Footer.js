import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#f2f2f2",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <a
        href="https://web.facebook.com/streuby"
        target="_blank"
        rel="noreferrer"
      >
        <BottomNavigationAction
          label="Facebook"
          value="facebook"
          icon={<FacebookIcon />}
        />
      </a>
      <a href="https://twitter.com/Streuby" target="_blank" rel="noreferrer">
        <BottomNavigationAction
          label="Twitter"
          value="twitter"
          icon={<TwitterIcon />}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/stephen-amade-reuben/"
        target="_blank"
        rel="noreferrer"
      >
        <BottomNavigationAction
          label="LinkedIn"
          value="linkedin"
          icon={<LinkedInIcon />}
        />
      </a>
    </BottomNavigation>
  );
};

export default Footer;
