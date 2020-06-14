import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from "@material-ui/icons/Edit"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import RefreshIcon from '@material-ui/icons/Refresh';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from 'firebase'
import { RadioGroup } from '@material-ui/core';

const adminUid = 'LbxxhioAmtP4AepED1WIvUhZcdT2'


const styles = (theme, props) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});



function Content(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("OPeninininf")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let [allusers, setUsers] = useState([])

  useEffect(() => {
    firebase.firestore().collection("Admins").doc(adminUid).get().then((doc) => {
      allusers = doc.data()['users']
      setUsers(allusers = doc.data()['users'])
    }).catch((err) => { })
    console.log(1)
    // console.log(allusers)
  }, [])


  const handleSubmit = () => {


    let email = document.getElementById("mail").value
    let pass = document.getElementById("Pass").value
    // console.log(firebase.firestore().collection("Users") )
    // const adminUid = firebase.auth().currentUser.uid

    firebase.auth().createUserWithEmailAndPassword(email, pass).then((r) => {
      console.log(r.user)
      // let isDunplicate = false

      firebase.firestore().collection("Admins").doc(adminUid).get().then((doc) => {
        let adminUsers = []
        if (doc.data()['users']) {
          adminUsers = doc.data()['users']
        }

        doc.ref.update({ users: [...adminUsers, { "uid": r.user.uid, "role": "mechanic", "email": r.user.email }] })
      })
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser} onClick={handleClickOpen}>
                Add user
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">ADD USER</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Create new user by adding a valid email and a password. Also select at least one of the check boxes
                    to establish User's role.
                        </DialogContentText>

                  <TextField
                    autoFocus
                    margin="dense"
                    id="mail"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="Pass"
                    name="password"
                    label="Password"
                    type="Password"
                    fullWidth
                  />
                  <RadioGroup>
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Admin" />
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Security" />
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Maintenance" />
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Media" />
                  </RadioGroup>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                        </Button>
                  <Button onClick={handleSubmit} color="primary">
                    Add User
                        </Button>
                </DialogActions>
              </Dialog>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>

        <table style={{ width: "100%" }}>
          <tr>
            <th align="left">UID</th>
            <th align="left">Email</th>
            <th align="left">ROLE</th>
            <th align="left">ACTIONS</th>
          </tr>
          {allusers && allusers.map((user, index) => {
            return <tr style={{ padding: "5px" }} key={index} >
              <td style={{ width: "300px " }}>{user['uid']}</td>
              <td style={{ width: "300px " }}>{user['email']}</td>
              <td style={{ width: "200px " }}>{user['role']}</td>
              <td>
                <EditIcon color="primary" style={{ padding: "2px" }}></EditIcon>
                <SaveIcon color="primary" style={{ padding: "2px" }}></SaveIcon>
                <DeleteIcon color="primary" style={{ padding: "2px" }}></DeleteIcon>
              </td>

            </tr>

          })}
        </table>

        {/* <Typography>
          No users have been added yet
      </Typography> */}
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);