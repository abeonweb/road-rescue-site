import React from 'react'
import ReactDOM from "react-dom"

export default function Modal({ open, onClose, id, image, name, title, description }) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay"/>
            <div className="modal">
                <article key={id} className="management">
                    <button className="modal-close-btn" onClick={onClose}>X</button>
                    <figure className="management-image-container">
                        <img className="management-image" src={require("../images/" + image + ".webp")} alt="" />
                        <figcaption>
                            <h3 className="management-name">{name}</h3>
                            <h4 className="management-title">{title}</h4>
                        </figcaption>
                    </figure>
                    <div className="management-info">
                        <p className="management-body">{description}</p>
                    </div>
                </article>
            </div>
        </>
    , document.getElementById("portal"))
}

