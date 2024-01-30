import React from 'react';
import asset from "assets/images";
import { ReactSVG } from 'react-svg';


export const DeleteIconButton = ({ onClick }) => (
    <IconButton iconSrc={asset?.icons?.binCircle} onClick={onClick} />
)
export const AttachmentIconButton = () => (
    <IconButton iconSrc={asset?.icons?.attach} />
)
export const CopyIconButton = () => (
    <IconButton iconSrc={asset?.icons?.clipboard} />
)

export const SimpleDeleteIconButton = ({ onClick }) => (<IconButton iconSrc={asset?.icons?.trashIcon} onClick={onClick} />)

const IconButton = ({ iconSrc, onClick }) => {
    return (
        <span
            className='cursor-pointer'
            onClick={onClick}>
            <ReactSVG
                src={iconSrc}
                className='d-inline-flex'
            />
        </span>
    );
};

export default IconButton;