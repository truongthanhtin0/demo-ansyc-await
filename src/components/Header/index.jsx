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
import React, { useState } from "react";
import history from "../../util/history";

function Header(props) {
  const [info, setInfo] = useState(JSON.parse(localStorage.getItem("user")));

  const handleClickLogout = () => {
    localStorage.removeItem("user");
    setInfo("");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            onClick={() => history.push("/")}
          >
            PROJECT EXAMPLE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!info && (
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
            )}
            <Button
              onClick={() => history.push("/profile")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Profile
            </Button>
            <Button
              onClick={() => history.push("/posts")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              List Post
            </Button>
            {info && (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={handleClickLogout}
              >
                Logout
              </Button>
            )}
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
