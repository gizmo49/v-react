import SmallLoader from "../SmallLoader/SmallLoader";
import "./Button.scss";

export const Button = ({
    text,
    type,
    classType,
    otherClass,
    disabled,
    onClick,
    loading,
    children,
    as = "button",
}) => {
    const As = as;
    return (
        <As
            type={type}
            className={`btn btn-${classType} ${otherClass || ""} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled || loading}>
            {loading ? (
                <SmallLoader />
            ) : (
                <>
                    {text}
                    {children}
                </>
            )}
        </As>
    );
};
