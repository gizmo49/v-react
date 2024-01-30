import { validateSize } from "../formatHandlers";

export const validateCustomForm = (request) => {
    let errors = {};
    let formisValid = true;
    let { formName, formElements } = request;
    if (formName === "") {
        errors["formName"] = "Form Name is Required";
        formisValid = false;
    }
    formElements &&
        formElements.forEach(
            ({
                id,
                enableSubTitleText,
                subText,
                elementLabel,
                elementType,
                branchId,
                customRules,
                elementOptions,
            }) => {
                // if (elementType !== "END_FORM") {
                //     errors["branch"] = "Ending Branch is required";
                //     formisValid = false;
                // } else {
                //     errors["branch"] = "";
                //     formisValid = true;
                // }

                if (elementType === "END_FORM") {
                    if (branchId === "" || branchId === undefined) {
                        errors["branch"] = "Ending Branch is required";
                        formisValid = false;
                    }
                } else {
                    if (elementLabel === "") {
                        errors[id] = {
                            ...errors[id],
                            elementLabel: "Label is required",
                        };
                        formisValid = false;
                    }
                    if (enableSubTitleText === true && subText === "") {
                        errors[id] = {
                            ...errors[id],
                            subText: `Subtitle text is required`,
                        };
                        formisValid = false;
                    }

                    if (customRules?.length > 0) {
                        errors[id] = {
                            ...errors[id],
                            customRules: customRules?.map((customRule, i) =>
                                customRule?.ruleCode === "text00"
                                    ? ""
                                    : customRule?.ruleConstraint?.length === 0
                                    ? i
                                    : ""
                            ),
                        };

                        if (errors[id]?.customRules?.join("")?.length > 0) {
                            formisValid = false;
                        }
                    }

                    if (elementOptions?.length > 0) {
                        errors[id] = {
                            ...errors[id],
                            elementOptions: elementOptions?.map(
                                (elementOption, i) =>
                                    elementOption?.text?.length === 0
                                        ? elementOption?.id
                                        : ""
                            ),
                        };

                        if (errors[id]?.elementOptions?.join("")?.length > 0) {
                            formisValid = false;
                        }
                    }
                }
            }
        );

    return {
        errors,
        formisValid,
    };
};

const ValidateForm = (e, request, optionalFields = [], reqParamsObj = {}) => {
    let errors = {};
    let formisValid = true;
    request &&
        Object.keys(request).forEach((field) => {
            let target = e?.target?.[field];
            let label = target?.parentNode?.querySelector("label")?.innerHTML;
            if (!label) {
                document.querySelectorAll("label")?.forEach((item) => {
                    if (item?.getAttribute("for") === field) {
                        label = item?.innerHTML;
                    }
                });
            }
            let optional = optionalFields?.find((item) => item === field);
            if (target && target.type === "file") {
                const fileSize = target?.getAttribute?.("data-size");
                const fileLabel = target?.getAttribute?.("data-label");
                const fileValue = target?.getAttribute?.("data-value");
                const file = target?.files?.[0];
                if (!validateSize(file, fileSize)) {
                    errors[
                        field
                    ] = `${fileLabel} must not be larger than ${fileSize}mb`;
                    formisValid = false;
                } else if (!optional && !fileValue && !file) {
                    errors[field] = `${fileLabel} is required`;
                    formisValid = false;
                }
            } else if (target && target.value !== undefined) {
                const fieldType = target.getAttribute?.("data-field");
                let labelType = "";
                document.querySelectorAll("label")?.forEach((item) => {
                    if (item?.getAttribute("for") === field) {
                        labelType = item.getAttribute("data-field");
                    }
                });

                let value = target.value;
                if (fieldType === "multiple" || labelType === "multiple") {
                    if (!request?.[field]?.length && !optional) {
                        errors[field] = `${label} is required`;
                        formisValid = false;
                    }
                } else if (!value && !optional) {
                    errors[field] = `${label} is required`;
                    formisValid = false;
                } else if (field === "email" || target.type === "email") {
                    /* eslint-disable-next-line no-useless-escape */
                    const regTest = /\S+@\S+\.\S+/.test(value);
                    errors[field] = regTest ? false : `${label} is invalid`;
                    if (regTest === false) {
                        formisValid = false;
                    }
                    // formisValid should equal regTest anyway
                } else if (field === "confirmPassword") {
                    const { password: { value: passwordVal = {} } = {} } =
                        e.target || {};
                    if (value !== passwordVal) {
                        errors["confirmPassword"] = `Passwords do not match`;
                        formisValid = false;
                    }
                } else if (fieldType === "password") {
                    const regTest =
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                            value
                        );
                    errors[field] = regTest
                        ? false
                        : `${label} must be at least 8 characters, contain at least 1 number and at least 1 special character`;
                    if (regTest === false) {
                        formisValid = false;
                    }
                    // formisValid should equal regTest anyway
                } else if (field === "fullName") {
                    const fullName = value?.split(" ");
                    errors[field] =
                        fullName?.length === 2 && fullName?.[1]?.length > 0
                            ? false
                            : `${label} must contain first name and last name`;
                    if (
                        fullName?.length !== 2 ||
                        fullName?.[1]?.length === 0 ||
                        fullName?.[1]?.length === undefined
                    ) {
                        formisValid = false;
                    }
                    // formisValid should equal regTest anyway
                }
                else if (field === "teamName") {
                    const teamName = value?.split(" ");
                    errors[field] =
                    teamName?.length === 2 && teamName?.[1]?.length > 0
                            ? false
                            : `${label} must contain atleast two words`;

                            errors[field] =  teamName?.length <= 3
                            ? false
                            : `${label} must not contain more than three words`;
                    if (
                        teamName?.length > 3 ||
                        teamName?.[1]?.length === 0 
                    ) {
                        formisValid = false;
                    }
                    // formisValid should equal regTest anyway
                }
                 else if (
                    field === "capsuleContent" ||
                    field === "capsuleClassName"
                ) {
                    const regTest = /^[ a-zA-Z0-9]+$/.test(value);
                    errors[field] = regTest
                        ? false
                        : `${
                              label ? label : ""
                          } must not containt special characters.`;
                    if (regTest === false) {
                        formisValid = false;
                    }
                    // formisValid should equal regTest anyway
                }
            } else if (reqParamsObj?.[field]) {
                if (field === "richText" && request?.[field]?.length <= 1) {
                    errors[field] = reqParamsObj?.[field];
                    formisValid = false;
                }
                if (!request?.[field]?.length) {
                    errors[field] = reqParamsObj?.[field];
                    formisValid = false;
                }
            }
        });

    return {
        errors,
        formisValid,
    };
};

export default ValidateForm;
