import React from 'react'
import ReactDOM from "react-dom"

export default function Modal({ open, onClose, id, image, name, title, description }) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" />
            <div className="modal">
                <article key={id} className="management">
                    <button className="modal-close-btn" onClick={onClose}>X</button>
                    <div className="management-inner-container">
                        <figure className="management-image-container">
                            <img className="management-image" src={require("../images/" + image + ".webp")} alt="" />
                        </figure>
                        <div className="management-info">
                            <h3 className="management-name">{name}</h3>
                            <h4 className="management-title">{title}</h4>
                            <p className="management-description">{description}</p>
                        </div>
                    </div>
                </article>
            </div>
        </>
        , document.getElementById("portal"))
}

