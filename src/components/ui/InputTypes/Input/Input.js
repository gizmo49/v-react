import { useState } from "react";
import { ReactComponent as EyeCheck } from "assets/images/icons/eye.svg";
import { ReactComponent as LockIcon } from "assets/images/icons/lock.svg";
import { ReactComponent as MailIcon } from "assets/images/icons/mail.svg";


export const Input = ({
    name,
    id,
    label,
    labelClass,
    grpClass,
    inputClass,
    type = "text",
    showPwd,
    placeholder,
    isErr,
    isValid,
    errMssg,
    extraMssg,
    isLoading,
    value,
    disabled,
    options,
    tooltip,
    onChange,
    fieldType,
    onBlur,
    onKeyDown,
    onKeyUp,
    hideLabel,
    hideError,
    autoFocus,
    min,
    max,
    minLength,
    maxLength,
    required
}) => {
    const [show, setShow] = useState(false);
    const [onlyReadPassword, changePasswordReadability] = useState(true);

    return (
        <div className={`form-group ${grpClass || ""}`}>
            {label && (
                <label
                    htmlFor={id}
                    className={`form-label ${labelClass || ""} ${disabled ? "text-muted" : ""
                        } ${hideLabel ? "d-none" : ""}`}>
                    {label}
                </label>
            )}
            {type === "password" && showPwd ? (
                <div className='position-relative'>
                    <span className={`pos-abs-left-center`}>
                        <LockIcon />
                    </span>
                    <input
                        type={show ? "text" : "password"}
                        name={name}
                        id={id}
                        className={`form-control ${isErr ? "is-invalid" : ""} ${inputClass || ""
                            }`}
                        placeholder={placeholder}
                        disabled={disabled}
                        data-field={fieldType}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={() => changePasswordReadability(false)}
                        readOnly={onlyReadPassword}
                        value={value}
                        autoComplete='off'
                        autoFocus={autoFocus}
                        required={required}
                    />
                    {!hideError && <div className='invalid-feedback'>{errMssg}</div>}
                    <span
                        className={`pos-abs-right-center`}
                        onClick={() => setShow((prevShow) => !prevShow)}>
                        {/* {show ? "hide" : "show"} */}
                        <EyeCheck />
                    </span>
                </div>
            ) : (
                <>
                    <div className='position-relative'>
                        {type === "email" && <span className={`pos-abs-left-center`}>
                            <MailIcon />
                        </span>}
                        <input
                            type={type}
                            name={name}
                            id={id}
                            data-label={label}
                            className={`form-control ${isLoading
                                    ? "is-loading"
                                    : isErr
                                        ? "is-invalid"
                                        : isValid
                                            ? "is-valid"
                                            : ""
                                } ${inputClass || ""}`}
                            placeholder={placeholder}
                            disabled={disabled}
                            data-field={fieldType}
                            onKeyUp={onKeyUp}
                            onKeyDown={onKeyDown}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            autoComplete='off'
                            autoFocus={autoFocus}
                            min={min}
                            max={max}
                            minLength={minLength}
                            maxLength={maxLength}
                            required={required}
                        />
                        {extraMssg ? (
                            <div className='text-muted extra-input-mssg'>
                                {extraMssg}
                            </div>
                        ) : null}
                        {!hideError && <div className='invalid-feedback'>{errMssg}</div>}
                    </div>
                </>
            )}
        </div>
    );
};
