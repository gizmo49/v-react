import React from "react";
import IntlTelInput from "react-intl-tel-input";
import "./PhoneNumberInput.scss";

const PhoneNumberInput = ({
	inputFieldName,
	inputValue,
	handlePhoneNumberChange,
	error,
	isDisabled,
	showErrorMsg,
	preferredCountries = ["NG"],
	...rest
}) => {
	// useEffect(() => {
	// 	document
	// 		.querySelector("input[type='tel']")
	// 		.setAttribute("maxlength", "10");
	// });
	return (
		<>
			<IntlTelInput
				key={preferredCountries[0]}
				preferredCountries={preferredCountries}
				// onlyCountries={["NG"]}
				onPhoneNumberChange={handlePhoneNumberChange}
				separateDialCode={true}
				fieldName={inputFieldName}
				value={inputValue}
				disabled={isDisabled}
				inputClassName={
				`form-control ${ error ? "is-invalid" : ""}`
				}
				autoComplete="off"
				{...rest}
			/>

			{showErrorMsg && error && (
				<span className="error-msg">{error}</span>
			)}
		</>
	);
};

export default PhoneNumberInput;
