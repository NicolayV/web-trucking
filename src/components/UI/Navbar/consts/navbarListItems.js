import DataUsageIcon from "@mui/icons-material/DataUsage";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export const navbarListItems = [
  {
    id: 0,
    icon: <DataUsageIcon />,
    label: "О компании",
    route: "about",
  },
  {
    id: 1,
    icon: <WorkOutlineIcon />,
    label: "Как это работает",
    route: "howitworks",
  },
  {
    id: 2,
    icon: <NewspaperIcon />,
    label: "Новости и статьи",
    route: "newsarticle",
  },
  {
    id: 3,
    icon: <AccountBoxIcon />,
    label: "Личный кабинет",
    route: "personalarea",
  },

  {
    id: 4,
    icon: <ContactSupportIcon />,
    label: "Обратная связь",
    route: "feedback",
  },
  {
    id: 5,
    icon: <LoginIcon />,
    label: "Войти",
    route: "signin",
  },
  {
    id: 6,
    icon: <AppRegistrationIcon />,
    label: "Зарегистрироваться",
    route: "signup",
  },
];
