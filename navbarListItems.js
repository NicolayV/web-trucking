import InfoIcon from "@mui/icons-material/Info";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export const navbarListItems = [
  {
    id: 0,
    icon: <InfoIcon />,
    label: "О компании",
    route: "route",
  },
  {
    id: 1,
    icon: <WorkOutlineIcon />,
    label: "Как это работает",
    route: "route",
  },
  {
    id: 2,
    icon: <NewspaperIcon />,
    label: "Новости и статьи",
    route: "route",
  },
  {
    id: 3,
    icon: <AccountBoxIcon />,
    label: "Личный кабинет",
    route: "route",
  },

  {
    id: 0,
    icon: <ContactSupportIcon />,
    label: "Обратная связь",
    route: "route",
  },
];
