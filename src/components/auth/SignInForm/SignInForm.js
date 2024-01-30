import { Button, Input } from "components/ui";
import React, { useState } from "react";
import ValidateForm from "utils/validations/Validator";

export const SignInForm = ({showProfileUpdateModal}) => {
    const [request, updateRequest] = useState({
        email: "chika@gmail.com",
        password: "",
    });

    // const [errorMsg, setErrorMsg] = useState();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateRequest({ ...request, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { errors, formisValid } = ValidateForm(e, request);
        if (formisValid) {
            showProfileUpdateModal();
        }
        setErrors(errors);
    };



    return (
        <form className='signin' onSubmit={handleSubmit}>
            <Input
                grpClass='mb-3'
                label={"Email"}
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={request?.email}
                onChange={handleChange}
                isErr={errors?.email}
                errMssg={errors?.email}
                hideLabel
                hideError
            />
            <Input
                grpClass='mb-3'
                label={'Password'}
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={request?.password}
                onChange={handleChange}
                isErr={errors?.password}
                errMssg={errors?.password}
                showPwd
                hideLabel
                hideError
            />
            <Button
                type='submit'
                text='Sign Up'
                classType='primary'
                // loading={loading}
                otherClass='my-3 w-100'
            />
        </form>
    );
};
