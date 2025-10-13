import { message } from "antd"
import { object, string } from "yup"

export const contactSchema = object({
    name: string().required("Please enter your name"),
    phone: string().max(11).required("Please enter your phone number"),
    email: string().email("Invalid email").required("Please enter your email"),
    message: string().required("Please enter your message"),
})

export const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
}