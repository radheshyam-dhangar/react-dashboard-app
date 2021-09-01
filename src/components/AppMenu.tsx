import { useState } from "react";
import clsx from "clsx";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import DefaultIcon from "@material-ui/icons/FileCopy";
import { useLocation } from "react-router-dom";

// components
import MenuItem from "./MenuItem";

// app routes
import { routes } from "../config";

// interfaces
import RouteItem from "../model/RouteItem.model";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    selected: {
      transition: "box-shadow",
      transitionDuration: "1s",
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`,
    },
  })
);

// functional component
const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location: any = useLocation();

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <List>
      {routes.map((route: RouteItem, index1) => (
        route.subRoutes ? (
          <ListItem button onClick={handleClick} key={'menu' + index1}>
            <ListItemIcon>
              <IconButton
                className={clsx({
                  [classes.selected]:
                    !open &&
                    route.subRoutes.some(
                      (item: RouteItem) => item.path === location.pathname
                    ),
                })}
                size="small"
              >
                <Icon component={route.icon || DefaultIcon} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItem>
        ) : (
          <MenuItem key={'submenu' + index1} route={route} />
        )
      ))}
    </List>
  );
};
export default Menu;