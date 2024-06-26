import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import logo from "./wave.png";
import hamster from "./hamster.json";
import Lottie from "lottie-react";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >       
      <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <img src={logo} alt="Logo" style={{ height: 'auto', width: 'auto', maxHeight: '3rem', marginRight: '0.05rem', margininLeft: '0.5rem' }} />
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          WaveSpace
        </Typography>
      </Box>
        </Box>

        <Box display="flex" justifyContent="center" my="-3rem">
        <Lottie animationData={hamster} style={{ height: 'auto', width: 'auto', maxHeight: '18rem' }} />
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to WaveSpace, a simple social media app!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;