import * as yup from "yup";

const SigInSchmea = yup.object().shape( {
    email: yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Email is required").email().required(),
    password: yup.string().min(4).max(4).required()
});

export default SigInSchmea;


