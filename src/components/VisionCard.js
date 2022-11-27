import React from 'react'

const VisionCard = ({ title, image, alt, text }) => {
    return (
        <div className="vision-card">
            <img src={require("../images/" + image + ".webp")} alt={alt} className="vision-image" />
            {/* <div className="vision-body"> */}
            <h3 className="vision-title">{title}</h3>
            <p className="vision-text-body">{text}</p>
            {/* </div> */}
        </div>
    )
}

export default VisionCard