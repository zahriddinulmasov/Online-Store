import "./header.scss";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CardMedia from "@mui/material/CardMedia";

import siteLogo from "../../assets/images/kivi.svg";

const pages = [
  { id: "1", path: "/announcements", name: "Обьявления" },
  { id: "2", path: "/shops", name: "Магазины" },
  { id: "3", path: "/for-business", name: "Для бизнеса" },
  { id: "4", path: "/help", name: "Помощь" },
];
const settings = [
  { id: "1", path: "/profile", name: "Вход" },
  { id: "2", path: "/registration", name: "Регистрация" },
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              onClick={handleOpenNavMenu}
              color="#000000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ p: "4px 8px" }}
                >
                  <NavLink
                    to={`${page.path}`}
                    style={{
                      padding: "8px 16px",
                      fontFamily: "IBM Plex Sans Arabic",
                      width: "100%",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                    className="headerLink"
                  >
                    {page.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
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
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 700,
              color: "#000000",
              textDecoration: "none",
              maxWidth: "165px",
              lineHeight: "14px",
              fontSize: { xs: "14px", sm: "15px" },
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
            {pages.map((page) => (
              <NavLink
                key={page.id}
                to={`${page.path}`}
                style={{
                  textDecoration: "none",
                  padding: "6px 16px",
                  fontSize: "15px",
                }}
                className=  "headerLink"
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, ml: "auto" }}>
            <Tooltip title="Панель управления">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    width: { xs: "36px", sm: "40px" },
                    height: { xs: "36px", sm: "40px" },
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem    key={setting.id} onClick={handleCloseUserMenu}>
                  <NavLink

                    to={`${setting.path}`}
                    style={{
                      textDecoration: "none",
                      padding: "6px 16px",
                      fontSize: "15px",
                    }}
                    className={({ isActive }) =>
                      isActive ? "active" : "headerLink"
                    }
                    onClick={handleCloseNavMenu}
                  >
                    {setting.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
