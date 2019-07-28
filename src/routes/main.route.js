import { HomeView, AboutView, CoursesView } from "../views/main";



export const MainRoutes = [
    {
      path: "/home",
      name: "Home",
      component: HomeView,
      layout: "/main",
      authorize:true,
      default:true
    },
    {
      path: "/courses",
      name: "Courses",
      component: CoursesView,
      layout: "/main",
      authorize:true
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
      layout: "/main",
      authorize:true
    }

  ];