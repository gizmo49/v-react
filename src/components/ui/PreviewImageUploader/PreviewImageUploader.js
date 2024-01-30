import React, { useRef } from 'react';

const PreviewImageUploader = ({acceptSelectedFile}) => {
    const inputFile = useRef(null) 

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            return
        }
        acceptSelectedFile(e.target.files[0])
    }

    return (
        <div className='my-2'>
            <input type='file' ref={inputFile} onChange={onSelectFile} style={{ display: 'none' }}/>
            <span onClick={() => inputFile.current.click()}>Tap to change avatar</span>
        </div>
    )
}

export default PreviewImageUploader;