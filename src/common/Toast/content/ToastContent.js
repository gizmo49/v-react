import { imageLinks } from "assets/images";
import { ReactSVG } from "react-svg";

const ToastContent = ({ message, isError }) => {
    return (
        <>
            <div className='toast-content'>
                <div className="toast-content-marker">
                    <ReactSVG
                        src={
                            isError
                                ? imageLinks.icons?.saveBadge  //should be replaced
                                : imageLinks.icons?.saveBadge
                        }
                    />
                </div>
                <div className='toast-content-message'>
                    <>{message}</>
                </div>
            </div>
        </>
    );
};

export default ToastContent;
