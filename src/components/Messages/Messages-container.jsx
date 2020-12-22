import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import OftadehListItems from "../OftadehListItems/OftadehListItems";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const MsgList = [
  {
    id: 1,
    title: "",
    avatar: "",
    subTitle: ""
  },
  {
    id: 2,
    title: "",
    avatar:
      "",
    subTitle: ""
  },
  {
    id: 3,
    title: "",
    avatar: "",
    subTitle: ""
  }
];

const MessagesContainer = props => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <OftadehListItems type="ListItemAvatar" data={MsgList} />
    </List>
  );
};

export default MessagesContainer;