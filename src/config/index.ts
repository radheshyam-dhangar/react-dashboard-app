// icons
import ViewListIcon from '@material-ui/icons/ViewList';
import ChatIcon from '@material-ui/icons/Chat';
// interface
import RouteItem from "../model/RouteItem.model";
import ChatBoard from "../pages/ChatBoard";
import TodoList from '../pages/TodoList';

// define app routes
export const routes: Array<RouteItem> = [
  {
    key: "router-dashboard",
    title: "Chat board",
    tooltip: "Chat board",
    path: "/",
    enabled: true,
    component: ChatBoard,
    icon: ChatIcon,
  },
  {
    key: "router-code",
    title: "Profile List",
    tooltip: "Profile List",
    path: "/profile-list",
    enabled: true,
    component: TodoList,
    icon: ViewListIcon,
    appendDivider: true,
  },
];
