import { useFormik } from "formik";
import React from "react";

const initialValues = {
    name: "",
    email: "",
    channel: "",
}

const onSubmit = (values) => {
    console.log("Subitted data is: ", values);
}

const validate = (values) => {
    let errors = {}
    if (!values.name) {
        errors.name = 'This field is Required'
    }
    if (!values.email) {
        errors.email = 'This field is Required'
    }
    if (!values.channel) {
        errors.channel = 'This field is Required'
    }
    return errors;
}
function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type={"text"}
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type={"email"}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type={"text"}
                        id="channel"
                        name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                    {formik.errors.channel ? <div className="errors">{formik.errors.channel}</div> : null}
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;
