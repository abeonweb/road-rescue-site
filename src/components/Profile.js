import React, {useState} from 'react'
import Modal from "../components/Modal"

const Profile = ({executive}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const { id, name, title, image } = executive

    return (
        <div key={`profile-${id}`}>
            <article className="profile" onClick={() => setIsOpen(true)}>
                <figure className="profile-image-container">
                    <img className="profile-image" src={require("../images/" + image + ".webp")} alt="" />
                    <figcaption>
                        <h3 className="profile-name">{name}</h3>
                        <h4 className="profile-title">{title}</h4>
                    </figcaption>
                </figure>
            </article>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                {...executive}
            />
        </div>
    )
}

export default Profile