import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            PROJECT EXAMPLE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <>
              <Button
                onClick={() => history.push("/register")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Register
              </Button>
              <Button
                onClick={() => history.push("/login")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>
            </>
            <Button
              onClick={() => history.push("/product-list")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Product
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Logout
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="" src="/broken-image.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
