import GoBackButton from "components/ui/Button/GoBackButton/GoBackButton";
import "../Modal.scss";

export const SideModal = ({ show, close, children, showCloseIcon = true, closeIconType, otherclassNames }) => {
    return (
        <div
            className={`side-modal ${show
                ? "active"
                : ""
                } ${otherclassNames ? otherclassNames : ''}`}>
            <div className='row side-overlay'>
                <div className='col-0 col-lg-7 d-flex justify-content-end px-0'>

                </div>
                <div className='col-12 col-lg-5 side-modal--container'>
                   
                    <div className='row me-0 ms-0'>
                        <div className='col-10 offset-1'>
                        {showCloseIcon && (
                        <GoBackButton onClick={close} type={closeIconType} />
                    )}
                            {show ? children : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
