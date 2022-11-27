import React from 'react'

const Objective = ({ image, alt, title, body, id }) => {
    return (
        <article className="objective">
            <div className="objective-container">
                <img src={require(`../images/${image}.webp`)} alt={alt} className="about-image" />
                <div>
                    <h3 className="about-body-title">{title}</h3>
                    <p className="about-body cutoff-text">{body}</p>
                    <input type="checkbox" className="expand-btn" />
                </div>
            </div>
        </article>
    )
}

export default Objective