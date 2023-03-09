import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const CardHome = ({ img, title, price, selected, id }) => {
  return (
    <>
      <Card
        sx={{
          margin: { xs: "3px", sm: "5px", md: "8px", lg: "10px" },
          width: { xs: "139px", sm: "155px", md: "175px", lg: "210px" },
          background: "white",
        }}
      >
        <CardActionArea onClick={selected} dataset={id}>
          <CardMedia
            component="img"
            image={img}
            alt="green iguana"
            sx={{
              m: "8px auto 0",
              height: { xs: "130px", sm: "140px", md: "155px", lg: "180px" },
              width: "auto",
            }}
          />
          <CardContent
            sx={{
              padding: { xs: "9px 6px", sm: "10px 7px", md: "12px 8px" },
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                mb: { xs: "6px", sm: "8px", md: "10px" },
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: { xs: "15px", sm: "16px", md: "18px" },
                height: { xs: "28px", sm: "32px", md: "36px" },
                overflow: "hidden",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                left: "auto",
                mb: { xs: "4px", sm: "5px", md: "6px" },
                fontFamily: "IBM Plex Sans Arabic",
                fontSize: { xs: "9px", sm: "10px", md: "12px" },
                lineHeight: { xs: "10px", sm: "12px", md: "14px" },
                color: "#4A4A4A",
              }}
            >
              Вчера 22:55
            </Typography>
            <Typography
              sx={{
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: { xs: "14px", sm: "16px", md: "18px" },
              }}
            >
              <span>{price}</span> $
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
