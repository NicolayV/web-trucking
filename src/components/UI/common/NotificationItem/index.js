import React, { useState } from "react";

import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu";

const NotificationItem = ({ iconButtonColor, iconColor }) => {
  const notifications = [
    { id: 0, label: "First notifications" },
    { id: 1, label: "First notifications" },
    { id: 2, label: "First notifications" },
    { id: 3, label: "First notifications" },
  ];

  const newNotifications = `You heve ${notifications.length} new notifications!`;
  const noNotifications = "No new notifications.";

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconButtonColor}
          onClick={notifications.length ? handleOpen : null}
        >
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsIcon color={iconColor} />
          </Badge>
        </IconButton>
      </Tooltip>

      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        manuItems={notifications}
      />
    </div>
  );
};

export default NotificationItem;
