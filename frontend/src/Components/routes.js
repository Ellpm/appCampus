import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Home from "./Home";
import Base from "./Base/Base";
import Statistic from "./Statistic/Statistic";
import FAQ from "./Faq/FAQ";
import Contact from "./Contacts/Contacts";

const routes = [
  {
    menu: "Главная",
    icon: <AccountBalanceIcon />,
    route: "/",
    component: <Home />,
  },
  {
    menu: "База данных",
    icon: <AssignmentIndIcon />,
    route: "/base",
    component: <Base />,
  },
  {
    menu: "Статистика",
    icon: <ShowChartIcon />,
    route: "/statistic",
    component: <Statistic />,
  },
  {
    menu: "FAQ",
    icon: <QuestionAnswerIcon />,
    route: "/faq",
    component: <FAQ />,
  },
  {
    menu: "Контакты",
    icon: <ContactMailIcon />,
    route: "/contacts",
    component: <Contact />,
  },
];

export default routes;
