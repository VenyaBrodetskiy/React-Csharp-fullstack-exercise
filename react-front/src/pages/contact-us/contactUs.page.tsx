import { Alert, AlertColor, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import { IContactUs } from '../../business logic/interfaces/contactus.interface';
import contactusService from '../../business logic/services/contactus.service';

interface ISnackBarStatus {
    visible: boolean,
    type: AlertColor,
    message: string
}

export default function ContactUsPage() {
    const [state, setState] = useState<IContactUs>({
        id: 0,
        email: "",
        message: "",
        userName: ""
    });

    // TODO: ask Elias about useRef
    const defaultStatus: ISnackBarStatus = { visible: false, type: "info", message: "" };
    const [snackBarStatus, setSnackBarStatus] = useState<ISnackBarStatus>(defaultStatus);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarStatus(defaultStatus);
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, key: string) => {
        setState({ ...state, [key]: event.target.value });
        console.log(state);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (state.email === "" || state.message === "" || state.userName === "") {
            setSnackBarStatus({
                visible: true,
                type: "warning",
                message: "Please fill in all fields"
            });
        }
        else {
            console.log("submit", state);
            const snackBarAlert = await contactusService.addMessage(state);
            if (snackBarAlert === "Ok") {
                setSnackBarStatus({
                    visible: true,
                    type: "success",
                    message: "Thank you for your message, we will come back as soon as possible"
                });
            } else {
                setSnackBarStatus({
                    visible: true,
                    type: "error",
                    message: snackBarAlert
                });
            }

        }
    };

    return (
        <div>
            <div className="display-4 mb-3">Contact us</div>
            <hr />
            <form className="col-lg-6">
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp"
                        placeholder="Elias" onChange={(e) => handleChange(e, "userName")} />
                    <label htmlFor="inputName">Name</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
                        placeholder="my@email.com" onChange={(e) => handleChange(e, "email")} />
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                </div>
                <div className="mb-3 form-floating">
                    <textarea className="form-control" id="inputMessage"
                        placeholder="Leave your message here" onChange={(e) => handleChange(e, "message")}></textarea>
                    <label htmlFor="inputMessage">Message</label>
                </div>

                <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>

            <Snackbar open={snackBarStatus.visible} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <Alert onClose={handleClose} severity={snackBarStatus.type} >
                    {snackBarStatus.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
