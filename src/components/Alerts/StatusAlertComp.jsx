import React, {Fragment} from "react";
import { Alert, AlertTitle } from '@material-ui/lab';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const StatusAlert = (props) => {
    return(
        <Fragment>
            <Alert severity={props.severity}>
                <AlertTitle>{props.status}</AlertTitle>

                <div className="d-flex justify-content-between">
                    <p>Registration {props.status}!</p>
                    <Dialog aria-labelledby="customized-dialog-title" open={props.visible}>
                        <DialogTitle id="customized-dialog-title">
                            <i>Status</i>
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                Registration {props.severity}, please {props.todo} in to continue to our store :)
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={props.close} autoFocus color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Alert>
        </Fragment>
    )
};

export default StatusAlert;