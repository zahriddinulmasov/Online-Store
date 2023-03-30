import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const LoginLeft = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClick = (evt) => {
    evt.preventDefault();

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          window.localStorage.setItem("token", data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Excuse me! Wrong login or password?");
      });
  };

  return (
    <Box
      sx={{
        p: {
          xs: "30px 20px",
          sm: "0 20px",
          md: "0 20px",
        },
        width: { xs: "100%", sm: "50%" },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "280px", sm: "305px", md: "330px" },
          m: "0 auto",
        }}
      >
        <Box
          sx={{
            mb: { xs: "30px", sm: "36px", md: "42px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              mb: { xs: "16px", sm: "18px", md: "22px" },
              fontWeight: 700,
              fontSize: { xs: "22px", md: "28px" },
              lineHeight: { xs: "25px", sm: "30px" },
              fontFamily: "IBM Plex Sans Arabic",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Авторизоваться
          </Typography>
          <Typography
            sx={{
              m: " 0 0 9px 4px",
              fontWeight: 500,
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              lineHeight: { xs: "18px", sm: "19px", md: "21px" },
              fontFamily: "IBM Plex Sans Arabic",
            }}
          >
            Введите email или номер телефона!
          </Typography>

          <TextField
            inputRef={emailRef}
            defaultValue="mor_2314"
            id="outlined-basic"
            label="Ваш email или номер"
            variant="outlined"
            autoComplete="off"
            sx={{ mb: { xs: "16px", sm: "19px", md: "22px" } }}
          />

          <Typography
            sx={{
              m: " 0 0 9px 4px",
              fontWeight: 500,
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              lineHeight: { xs: "18px", sm: "19px", md: "21px" },
              fontFamily: "IBM Plex Sans Arabic",
            }}
          >
            Введите пароль!
          </Typography>

          <FormControl sx={{ mb: { xs: "18px", sm: "21px", md: "24px" } }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              inputRef={passwordRef}
              defaultValue="83r5^_"
              label="Пароль"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            onClick={handleClick}
            sx={{
              p: "17px 100px",
              fontWeight: 500,
              fontSize: "17px",
              lineHeight: "21px",
              fontFamily: "IBM Plex Sans Arabic",
              background: "#41D481",
              color: "#FFFFFF",
              textTransform: "capitalize",

              "&:hover": { background: "#41D481", opacity: 0.8 },
            }}
          >
            Войти
          </Button>
        </Box>

        <Box
          sx={{
            mb: { xs: "10px", sm: "13px", md: "16px" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "0.5px solid #979797",
              width: "100%",
              display: "block",
            }}
          />
          <Box
            sx={{
              m: "0 12px",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "17px",
              fontFamily: "IBM Plex Sans Arabic",
            }}
          >
            или
          </Box>
          <Box
            sx={{
              border: "0.5px solid #979797",
              width: "100%",
              display: "block",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              mr: "6px",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "17px",
              fontFamily: "IBM Plex Sans Arabic",
            }}
          >
            У вас нет аккаунта?
          </Typography>
          <Link to="/registration">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: { xs: "17px", sm: "18px", md: "20px" },
                fontFamily: "IBM Plex Sans Arabic",
                color: "red",
              }}
            >
              Зарегистрироваться
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
