import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { SIDEBAR_ITEMS, TSidebarItem } from "@/commons/constants/sidebar";

interface Props {
  item: TSidebarItem;
  isChild?: boolean;
}

const SidebarItem = ({ isChild, item }: Props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const matchesPath = (path?: string) => (path ? location.pathname.startsWith(path) : false);

  const isChildActive = (item.children || []).some((child) => matchesPath(child.path));

  const isActive = matchesPath(item.path) || isChildActive;

  useEffect(() => {
    if (isChildActive) {
      setOpen(true);
    }
  }, [isChildActive]);

  const handleClick = () => {
    if (hasChildren) setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleClick}
          component={item.path && !hasChildren ? Link : "button"}
          to={item.path || ""}
          sx={{
            pl: isChild ? 7 : 2,
          }}
          selected={isActive}
        >
          {item.icon && <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>}
          <ListItemText primary={item.label} />
          {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </ListItem>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children!.map((child) => (
              <SidebarItem item={child} key={child.key} isChild />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const ProtectedLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" anchor="left">
        <Box sx={{ textAlign: "center", p: 2 }}>
          <img src="/images/logo.png" alt="Logo" />
        </Box>
        <List component="nav" sx={{ width: 260, p: "0 16px" }}>
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem key={item.key} item={item} />
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "260px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
