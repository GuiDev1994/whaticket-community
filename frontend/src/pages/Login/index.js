import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, InputAdornment, IconButton, Link, Paper, useTheme, useMediaQuery } from '@material-ui/core';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 16,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    minHeight: '600px',
    height: '600px',
  },
  imageSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: theme.spacing(4),
    height: '100%',
    minHeight: '600px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(102, 126, 234, 0.8)',
      zIndex: 1,
    },
  },
  imageContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  imageTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  imageSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    maxWidth: '400px',
    lineHeight: 1.6,
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(6),
    backgroundColor: 'white',
    minHeight: '600px',
    height: '100%',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  avatar: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: 64,
    height: 64,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: 600,
  },
  form: {
    width: '100%',
  },
  textField: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 12,
    padding: theme.spacing(1.5),
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
    '&:hover': {
      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
    },
  },
  registerLink: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      fontWeight: 500,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  mobileContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: theme.spacing(2),
  },
  mobilePaper: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: 16,
    padding: theme.spacing(4),
    backgroundColor: 'white',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  },
}));

export default function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  if (isMobile) {
    return (
      <div className={classes.mobileContainer}>
        <CssBaseline />
        <Paper className={classes.mobilePaper} elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.title}>
              {i18n.t("login.title")}
            </Typography>
            <form className={classes.form} noValidate onSubmit={handlSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={i18n.t("login.form.email")}
                name="email"
                value={user.email}
                onChange={handleChangeInput}
                autoComplete="email"
                autoFocus
                className={classes.textField}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={i18n.t("login.form.password")}
                id="password"
                value={user.password}
                onChange={handleChangeInput}
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                className={classes.textField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((e) => !e)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {i18n.t("login.buttons.submit")}
              </Button>
            </form>
            <Box className={classes.registerLink}>
              <Link
                href="#"
                variant="body2"
                component={RouterLink}
                to="/signup"
              >
                {i18n.t("login.buttons.register")}
              </Link>
            </Box>
          </Box>
        </Paper>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container style={{ height: '100%' }}>
            {/* Image Section */}
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
              <div className={classes.imageSection}>
                <div className={classes.imageContent}>
                  <Typography variant="h3" className={classes.imageTitle}>
                    Whaticket
                  </Typography>
                  <Typography variant="h6" className={classes.imageSubtitle}>
                    Central de comunicação da Módulo Contabilidade e Tecnologia
                  </Typography>
                </div>
              </div>
            </Grid>

            {/* Form Section */}
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
              <div className={classes.formSection}>
                <div className={classes.formContainer}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar className={classes.avatar}>
                      <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h4" className={classes.title}>
                      {i18n.t("login.title")}
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handlSubmit}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={i18n.t("login.form.email")}
                        name="email"
                        value={user.email}
                        onChange={handleChangeInput}
                        autoComplete="email"
                        autoFocus
                        className={classes.textField}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={i18n.t("login.form.password")}
                        id="password"
                        value={user.password}
                        onChange={handleChangeInput}
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        className={classes.textField}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword((e) => !e)}
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        {i18n.t("login.buttons.submit")}
                      </Button>
                    </form>
                    <Box className={classes.registerLink}>
                      <Link
                        href="#"
                        variant="body2"
                        component={RouterLink}
                        to="/signup"
                      >
                        {i18n.t("login.buttons.register")}
                      </Link>
                    </Box>
                  </Box>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}