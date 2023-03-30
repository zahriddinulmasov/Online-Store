import axios from "axios";
import { useEffect, useRef, useState } from "react";

import "./to.css";

import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

import { NameProduct } from "./components/nameProduct";

// I didn't get the values ​​from the remaining select and inputs because the API doesn't support it!

export const ToAnnounce = () => {
  const priceRef = useRef("");
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const imageRef = useRef(null);

  const [data, setData] = useState({});
  const [category, setCategory] = useState(
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  );

  const categories = [
    {
      name: "Электроника",
      value: "electronics",
      id: 1,
    },
    {
      name: "Украшения",
      value: "jewelery",
      id: 2,
    },
    {
      name: "Мужская одежда",
      value: "men's clothing",
      id: 3,
    },
    {
      name: "Женская одежда",
      value: "women's clothing",
      id: 4,
    },
  ];

  function addNewProduct() {
    //Image does not support image from local file!

    setData({
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      image: `https://picsum.photos/117/155?random=${priceRef.current.value}`,
      category: category,
    });
  }

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_URL, {
        method: "POST",
        body: JSON.stringify(data),
      })
      .then((data) => console.log(data.data));
  }, [data]);

  const radioChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const regions = [
    {
      name: "Ташкент г.",
      id: 1,
    },
    {
      name: "Андижанская об.",
      id: 2,
    },
    {
      name: "Бухарская об.",
      id: 3,
    },
    {
      name: "Ферганская об.",
      id: 4,
    },
    {
      name: "Джизакская об.",
      id: 5,
    },
    {
      name: "Навоийская об.",
      id: 6,
    },
    {
      name: "Наманганская об.",
      id: 7,
    },
    {
      name: "Кашкадарьинская об.",
      id: 8,
    },
    {
      name: "Самаркандская об.",
      id: 9,
    },
    {
      name: "Сырдарьинская об.",
      id: 10,
    },
    {
      name: "Сурхандарьинская об.",
      id: 11,
    },
    {
      name: "Ташкентская об.",
      id: 12,
    },
    {
      name: "Хорезмская об.",
      id: 13,
    },
    {
      name: "Р. Каракалпакстан",
      id: 14,
    },
  ];

  const defaultProps = {
    options: regions,
    getOptionLabel: (option) => option.name,
  };

  return (
    <Box
      sx={{
        m: { xs: "56px 0 0", sm: "63px 0 0", md: "78px 0 0" },
        p: {
          xs: "10px 20px 10px",
          sm: "15px 24px 15px",
          md: "25px 24px 20px",
        },
        background: "LightCyan",
      }}
    >
      <Box sx={{ mx: "auto", maxWidth: "700px" }}>
        <Typography
          variant="h3"
          sx={{
            mb: "16px",
            fontFamily: "IBM Plex Sans Arabic",
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "26px", md: "28px" },
            lineHeight: { xs: "27px", sm: "29px", md: "31px" },
            color: "#000000",
            textAlign: "center",
          }}
        >
          Добавить обьявления бесплатно
        </Typography>

        <Box>
          <NameProduct title="Выбрайте категорию!" />

          <Box sx={{ m: "8px 0", fontSize: "12px" }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={category}
              onChange={radioChangeHandler}
              sx={{ display: "flex" }}
            >
              <Box>
                {categories.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.value}
                    control={
                      <Radio
                        sx={{ height: { xs: "30px", sm: "35px", md: "40px" } }}
                      />
                    }
                    label={
                      <Box
                        component="span"
                        sx={{
                          fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        }}
                      >
                        {item.name}
                      </Box>
                    }
                  />
                ))}
              </Box>
            </RadioGroup>

            {/* {categories.map((item) => (
              // <RadioCategory
              //   key={item.id}
              //   changed={radioChangeHandler}
              //   id={item.id}
              //   isSelected={Category === item.value}
              //   label={
              //     <Box component="span" sx={{ fontSize: "16px" }}>
              //       {item.name}
              //     </Box>
              //   }
              //   value={item.value}
              // />
            ))} */}
          </Box>
        </Box>

        <Box>
          <NameProduct title="Введите наименование товара!" />

          <Box sx={{ m: "8px 0 16px" }}>
            <TextField
              inputRef={titleRef}
              id="standard-basic"
              placeholder="Название продукта"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
        </Box>

        <Box>
          <NameProduct title="Введите цену нового продукта!" />

          <Box sx={{ m: "8px 0 16px" }}>
            <TextField
              inputRef={priceRef}
              sx={{ width: "100%" }}
              id="standard-basic"
              placeholder="Цена продукта"
              variant="standard"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box>
          <NameProduct title="Выбирайте картину!" />

          <Box sx={{ m: "4px 0 12px" }}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ p: "8px 0" }}
            >
              <Input
                ref={imageRef}
                accept="image/*"
                type="file"
                sx={{ maxWidth: "270px" }}
              />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <NameProduct title="Введите о продукте!" />

          <Box sx={{ m: { xs: "12px 20px 12px 0", sm: "12px 24px 12px 0" } }}>
            <TextareaAutosize
              ref={descriptionRef}
              style={{
                padding: "4px 10px",
                minHeight: "64px",
                borderRadius: "8px",
                width: "100%",
              }}
              placeholder="О продукте"
            />
          </Box>
        </Box>

        <Box sx={{ mb: "12px" }}>
          <NameProduct title="Местоположение объекта" />
          <Box
            sx={{
              m: " 12px 0 8px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Autocomplete
              sx={{ m: " 0 20px 12px 0 ", width: "100%" }}
              {...defaultProps}
              id="clear-on-escape"
              clearOnEscape
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Выбрайте область!"
                  variant="standard"
                />
              )}
            />

            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Выбирайте район!"
              variant="standard"
            />
          </Box>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95922.10083975263!2d69.26985975591059!3d41.29655667916361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2suk!4v1679677064575!5m2!1sru!2suk"
            width="100%"
            height="450"
            id="myIframe"
            title="www"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            alt="some alt text"
          ></iframe>
        </Box>

        <Box
          sx={{
            mb: "16px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{ m: { xs: "0 0 10px 0", sm: "0 20px 0 0" }, width: "100%" }}
          >
            <Typography
              sx={{
                fontFamily: "IBM Plex Sans Arabic",
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: "17px",
              }}
            >
              Введите телефонный номер!
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="standard-search"
              placeholder="Номер телефона"
              type="number"
              variant="standard"
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontFamily: "IBM Plex Sans Arabic",
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: "17px",
              }}
            >
              Введите email-адрес!
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="standard-search"
              placeholder="Email"
              type="number"
              variant="standard"
            />
          </Box>
        </Box>

        <Box sx={{ mb: "12px", textAlign: { xs: "center", sm: "left" } }}>
          <Button
            onClick={addNewProduct}
            sx={{
              margin: "0 auto",
              padding: "12px 30px",
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 500,
              fontSize: "19px",
              lineHeight: "23px",
              color: "#000000",
              background: "#19D476",
              borderRadius: "13px",
              textTransform: "inherit",
              "&:hover": { background: "#19D476", opacity: 0.7 },
            }}
          >
            Добавить
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
