import DashboardContainer from "../containers/DashboardContainer";
import HomeContainer from "../containers/HomeContainer";
import ProfilesContainer from "../containers/ProfilesContainer";
import ProfileContainer from "../containers/ProfileContainer";
import TournamentsContainer from "../containers/TournamentsContainer";
import RafflesContainer from "../containers/RafflesContainer";
import LoginContainer from "../containers/LoginContainer";
import NotFoundContainer from "../containers/NotFoundContainer";
import MainLayout from "../layouts/Main/MainLayout";
import EmptyLayout from "../layouts/Empty/EmptyLayout";
import LoginHoc from "../hoc/LoginHoc";

const routes = [
  {
    path: "/profile/:id",
    exact: false,
    container: ProfileContainer,
    layout: MainLayout,
    auth: true
  },
  {
    path: "/profiles",
    exact: true,
    container: ProfilesContainer,
    layout: MainLayout,
    auth: true
  },
  {
    path: "/raffles",
    exact: true,
    container: RafflesContainer,
    layout: MainLayout,
    auth: true
  },
  {
    path: "/tournaments",
    exact: true,
    container: TournamentsContainer,
    layout: MainLayout,
    auth: true
  },
  {
    path: "/login",
    exact: true,
    container: LoginHoc(LoginContainer),
    layout: MainLayout,
    auth: false
  },
  {
    path: "/dashboard",
    exact: true,
    container: DashboardContainer,
    layout: MainLayout,
    auth: true
  },
  {
    path: "/",
    exact: true,
    container: LoginHoc(HomeContainer),
    layout: MainLayout,
    auth: false
  },
  {
    path: "*",
    exact: false,
    container: NotFoundContainer,
    layout: EmptyLayout,
    auth: false
  }
];
export default routes;
