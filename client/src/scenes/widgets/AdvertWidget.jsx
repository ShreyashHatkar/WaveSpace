import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Bowers & Wilkins</Typography>
        <Typography color={medium}><a href="https://www.bowerswilkins.com/en-us/product/headphones/px8-mclaren/300494ML.html">bowerswilkins.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Px8 McLaren Edition
      Special-edition over-ear noise cancelling headphones
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;