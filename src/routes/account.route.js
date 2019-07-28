import {LoginView} from "../views/account"


export const AccountRoutes = [
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      layout: "/account",
      default:true
    }
  ];
  