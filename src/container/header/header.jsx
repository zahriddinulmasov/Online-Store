import "./header.scss";

import { useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import CardMedia from "@mui/material/CardMedia";

import siteLogo from "../../assets/images/kivi.svg";
import { Button, Divider, ListItemText, MenuList, Paper } from "@mui/material";

import home from "../../assets/images/home.png";
import announcements from "../../assets/images/announcements.svg";
import shops from "../../assets/images/shops.png";
import forBusiness from "../../assets/images/forBusiness.png";
import help from "../../assets/images/help.webp";
import enter from "../../assets/images/enter.png";

const pages = [
  { id: "1", path: "/", name: "Главная страница", img: home },
  { id: "2", path: "/announcements", name: "Обьявления", img: announcements },
  { id: "3", path: "/shops", name: "Магазины", img: shops },
  { id: "4", path: "/for-business", name: "Для бизнеса", img: forBusiness },
  { id: "5", path: "/help", name: "Помощь", img: help },
];

const pagesDesktop = pages.slice(1)

const settings = [
  { id: "6", path: "/login", name: "Вход", img: enter },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  const handleLogin = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  }

  const changeProfileIcon = () => {
  navigate("/user-profile")
  }

  return (
    <AppBar style={{ background: "white" }}>
      <Container sx={{ padding: "0 20px" }}>
        <Toolbar disableGutters>
          <CardMedia
            component="img"
            image={siteLogo}
            alt="Site logo"
            sx={{
              m: "6px 12px 6px 0",
              width: "67px",
              display: { xs: "none", md: "flex" },
            }}
          />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 700,
              color: "#000000",
              textDecoration: "none",
              maxWidth: "165px",
              lineHeight: "17px",
              fontSize: "15px",
            }}
          >
            Продай, найди, купи все что пожелаешь…
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: "auto" }}>
            <IconButton
              sx={{ p: "12px 6px" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer}
              color="#000000"
            >
              <MenuIcon />
            </IconButton>

            <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
              <Paper sx={{ boxShadow: "none" }}>
                <MenuList>
                  {pages.map((page) => (
                    <MenuItem key={page.id} sx={{ p: "4px 8px" }}>
                      <NavLink
                        to={page.path}
                        style={{
                          padding: "8px 16px",
                          fontFamily: "IBM Plex Sans Arabic",
                          width: "100%",
                          textDecoration: "none",
                          fontSize: "15px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        className="headerLink"
                      >
                        <CardMedia
                          image={page.img}
                          sx={{ width: "18px", height: "18px" }}
                        />
                        <ListItemText sx={{ ml: "12px" }}>
                          {page.name}
                        </ListItemText>
                      </NavLink>
                    </MenuItem>
                  ))}
                  <Divider />
                  {settings.map((page) => (
                    <MenuItem key={page.id} onClick={handleLogin} sx={{ p: "4px 8px" }}>
                      <NavLink
                        to={page.path}
                        style={{
                          padding: "8px 16px",
                          fontFamily: "IBM Plex Sans Arabic",
                          width: "100%",
                          textDecoration: "none",
                          fontSize: "15px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        className="headerLink"
                      >
                        <CardMedia
                          image={page.img}
                          sx={{ width: "18px", height: "18px" }}
                        />
                        <ListItemText sx={{ ml: "12px" }}>
                          {page.name}
                        </ListItemText>
                      </NavLink>
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Drawer>
          </Box>
          <CardMedia
            component="img"
            image={siteLogo}
            alt="Site logo"
            sx={{
              m: "0 8px 0 0",
              width: { xs: "35px", sm: "45px", md: "24px" },
              display: { xs: "flex", md: "none" },
            }}
          />
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              mr: {xs: "8px", sm: "12px", md: "16px"},
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 700,
              color: "#000000",
              textDecoration: "none",
              maxWidth: "165px",
              lineHeight: "14px",
              fontSize: { xs: "13.4px", sm: "15px" },
            }}
          >
            Продай, найди, купи все что пожелаешь…
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pagesDesktop.map((page) => (
              <NavLink
                key={page.id}
                to={`${page.path}`}
                style={{
                  textDecoration: "none",
                  padding: "6px 12px",
                  fontSize: "15px",
                }}
                className="headerLink"
              >
                {page.name}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, ml: "auto" }}>
            {token ? (
              <IconButton onClick={changeProfileIcon} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{
                    width: { xs: "36px", sm: "40px" },
                    height: { xs: "36px", sm: "40px" },
                  }}
                />
              </IconButton>
            ) : (
              <Button
                onClick={handleLogin}
                sx={{
                  height: "26px",
                  background: "#00CF67",
                  fontSize: {xs: "14px", sms: "15px", md: "16px"},
                  fontFamily: "IBM Plex Sans Arabic",
                  color: "white",
                  textTransform: "inherit",
                  "&:hover": { opacity: 0.7, background: "#00CF67" },
                }}
              >
                Log in
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
