import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import LoginForm from "./LoginForm";
import authImage from "../../../assets/img/auth3.jpg";

// <===============Material-ui============================>
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import FadeIn from "react-fade-in";
import { PlayCircle } from "react-feather";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    backgroundColor: "#1C1F22",
    display: "flex",
    height: "100%",
    minHeight: "100%",
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 80,
  },
  card: {
    overflow: "visible",
    display: "flex",
    position: "relative",
    backgroundColor: "#282A2D",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
      width: "50%",
    },
  },
  content: {
    padding: theme.spacing(4, 4, 3, 4),
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  alert: {
    backgroundColor: "#1C1F22",
    fontSize: "16px",
    color: "#adb0bb !important",
  },
}));
// <======================================================>

export default function LoginCard() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmitSuccess = () => {
    history.push("/dashboard");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper className={classes.card}>
          <CardContent className={classes.content}>
            <FadeIn>
              <div className="header">Sign In</div>
              <div className="subtitle">Your Welcome To Sign In </div>
              <Box mt={2}>
                <Alert severity="info" className={classes.alert}>
                  <div>
                    Use <b>demo@example.com</b> and pwd <b>demo</b>
                  </div>
                </Alert>
              </Box>
              <Box mt={3}>
                <LoginForm onSubmitSuccess={handleSubmitSuccess} />
              </Box>
              <Box my={2}>
                <Divider />
              </Box>
              <Link
                component={RouterLink}
                to="/register"
                variant="body2"
                color="textPrimary"
              >
                Create new account
              </Link>
            </FadeIn>
          </CardContent>
          <CardMedia className={classes.media} image={authImage} title="Cover">
            <Box alignItems="center" display="flex" mt={3}>
              {/* <Avatar alt="Person" src={PlayCircle} /> */}
              <Box ml={1}>
                <Typography color="textSecondary" variant="h1">
                  Video-Sync
                </Typography>
                <Typography color="textSecondary" variant="subtitle1">
                  Lets you watch together
                </Typography>
              </Box>
            </Box>
          </CardMedia>
        </Paper>
      </Container>
    </div>
  );
}
