import React, { useState } from 'react';
import { imageLinks } from 'assets/images';
import { Button, Input } from 'components/ui';
import PhoneNumberInput from 'components/ui/InputTypes/PhoneNumberInput/PhoneNumberInput';
import PreviewImageUploader from 'components/ui/PreviewImageUploader/PreviewImageUploader';

const UpdateUserProfileForm = () => {

    const [request, updateRequest] = useState({
        username: "",
        phoneNumber: "",
        dialCode: "",
        file: ""
    });
    const [errors, setErrors] = useState({});
    const [preview, setPreview] = useState(imageLinks?.images?.defaultAvatar)

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateRequest({ ...request, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const acceptSelectedFile = (file) => {
        const objectUrl = URL.createObjectURL(file);
        updateRequest({ ...request, file });
        setPreview(objectUrl)

    }

    const handlePhone = (__, value, countryData) => {
        let Numbers = value.replace(/[^0-9]/g, "");
        value = Numbers.replace(/^(-?)0+/, "");
        updateRequest({ ...request, phoneNumber: value, dialCode: countryData.dialCode });
    };

    return (
        <div className='profile__form'>
            <h6>Almost there</h6>
            <p>Just a few more details for us to create your account</p>
            <div className="avatar__file--input">
                <img src={preview} alt="Avatar" />
                <PreviewImageUploader {...{ acceptSelectedFile }} />
            </div>
            <div className="px-4">
                <Input
                    grpClass='mb-3'
                    type='username'
                    name='username'
                    id='username'
                    placeholder='username'
                    value={request?.username}
                    onChange={handleChange}
                    isErr={errors?.username}
                    errMssg={errors?.username}
                    inputClass={'regular'}
                />
                <PhoneNumberInput
                    inputFieldName="phoneNumber"
                    inputValue={request?.phoneNumber}
                    handlePhoneNumberChange={handlePhone}
                    error={errors?.phoneNumber}
                />
                <Button
                    type='submit'
                    text='Confirm'
                    classType='primary'
                    // loading={loading}
                    otherClass='my-3 w-100'
                />
            </div>
        </div>
    );
};

export default UpdateUserProfileForm;