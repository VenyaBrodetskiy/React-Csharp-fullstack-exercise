import axios from "axios";
import { IContactUs } from "./../interfaces/contactus.interface";

class ContactUsService {

    public async addMessage(message: IContactUs) {
        try {
            const response = await axios.post(
                "http://localhost:7105/api/contactus",
                message
            );
            if (response.status === 200 && response.data) {
                return "Ok";
            }
            else {
                return "Failed"
            }
        } catch (error) {
            console.log(error);
            return (error as any).message;
        }
    }
}

/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new ContactUsService();