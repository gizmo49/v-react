import React from "react";
import SmallLoader from "components/ui/SmallLoader/SmallLoader";
import "./AddButton.scss";

const AddButton = ({
    btnText,
    otherClassName = "",
    hasIcon = true,
    loading,
    customIcon,
    ...rest
}) => {
    return (
        <button
            className={`add-button add-button--add ${otherClassName}`}
            {...rest}
            type='button'>
            {loading ? (
                <SmallLoader otherClassName={"addLoaderIcon"} />
            ) : (
                <>
                    {" "}
                    {hasIcon && (
                       <div className="custom--icon add-new"></div>
                    )}
                </>
            )}
            <span>{btnText}</span>
        </button>
    );
};

export default AddButton;
