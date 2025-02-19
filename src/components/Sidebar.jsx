import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerContent = (
    <List>
      {categories.map((category) => (
        <ListItem key={category} disablePadding>
          <ListItemButton
            selected={selectedCategory === category}
            onClick={() => {
              onSelectCategory(category);
              if (isMobile) setMobileOpen(false);
            }}
          >
            <ListItemText primary={category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{ position: "fixed", top: "2rem", left: "3.5rem", zIndex: 1300 }}
        >
          <Menu />
        </IconButton>
      )}

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "15rem",
              top: "4rem",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: "15rem",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "15rem",
              boxSizing: "border-box",
              position: "fixed",
              height: "calc(100% - 4.125rem)", // Full height minus navbar height
              top: "4.125rem",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
