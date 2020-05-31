import React, { useState } from 'react';
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



const styles = (theme,props) => ({
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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 
  
  
  /*const [uEmail, setEmail] = useState(''); 
  const [uPassword, setPassword] = useState(''); 
  const [formValid, setFormValid] = useState(false);  
  const [formData, setFormData] = useState([]); */
  

   
 
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
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Admin" /> 
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Security" />
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Maintenance" />
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Media" /> 
                        
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
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
      <Typography> 
        No users have been added yet 
      </Typography>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);