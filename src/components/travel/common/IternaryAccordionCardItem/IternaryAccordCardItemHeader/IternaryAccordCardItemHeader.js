import { ReactComponent as Arrow } from "assets/images/icons/arrow-up.svg";

const IternaryAccordCardItemHeader = ({ title, createdAt, price, isOpen }) => {
    return (
        <>
            <div className="row">
                <div className='col-1 pe-0 bg-white'>
                    <span className="custom--icon airplane--lg"></span>
                </div>
                <div className='col-8'>
                    <div className="sub_text">
                        <h6>{title}</h6>
                    </div>
                </div>
                <div className="col-3">
                    <span className="time">{createdAt}</span>
                </div>
            </div>
            <div className="mt-2">
                <div className="row">

                    <div className='col-1 pe-0'>

                    </div>
                    <div className="col-8">
                        <span className="price">{price}</span>
                    </div>
                    <div className="col-3">
                        <div className={`accordion__toggle ${isOpen ? 'active' : ""}`}>
                            <span>{`See ${isOpen ? 'Less' : "More"}`}</span>
                            <Arrow />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default IternaryAccordCardItemHeader;
