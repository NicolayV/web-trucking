import React from "react";
import NotificationItem from "../common/NotificationItem";
import BasicButton from "../common/BasicButton";
import Avatar from "@mui/material/Avatar";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const headerStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    width: "100%",
    backgroundColor: "primary.main",
    marginLeft: "320px",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    padding: "10px",
    alignItem: "center",
    "*": { marginRight: "5px" },
  },
  middleRow: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-between",
  },
  link: {
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover": {
      color: "#fff",
      cursor: "pointer",
    },
  },
  webButton: {
    marginRight: "5px",
    color: "#fff",
  },
};

const Header = ({ title }) => {
  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>go to docs</Typography>
        <NotificationItem iconColor="action" iconButtonColor="primary" />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </Box>

      <Box sx={headerStyles.middleRow}>
        <Typography variant="h4" color="white">
          {title}
        </Typography>

        <Box>
          <BasicButton sx={headerStyles.webButton} variant="outlined">
            Web setup
          </BasicButton>

          <Tooltip title="help">
            <IconButton>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
