import * as yup from "yup";

export const SigInSchmea = yup.object().shape( {
    email: yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Email is required").email().required(),
    password: yup.string().min(4).max(20).required()
});



export const SignUpSchema = yup.object().shape( {
    firstName: yup.string().min(3).max(50).required(),
    lastName: yup.string().min(5).max(50).required(),
    email: yup.string().min(5).max(50).required().email()

});
