import { Button } from "../Button";
import { ReactSVG } from "react-svg";
import imageLinks from "assets/images";
import "./SolidAddButton.scss";

const SolidAddButton = ({ btnText, onClick }) => {
    return (
        <Button classType={`primary`} onClick={onClick}>
            <div className='solid__add__button'>
                <ReactSVG
                    src={imageLinks?.icons?.boldWhitePlus}
                    className='plusIcon'
                />
                <span>{btnText}</span>
            </div>
        </Button>
    );
};

export default SolidAddButton;
