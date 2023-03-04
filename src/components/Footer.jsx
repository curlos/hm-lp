import { Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'
import Image from "next/image"

const Footer = () => {

    const fontAwesomeIconStyle = {
        height: "25px", 
        fontWeight: "bold"
    }

    return (
        <footer className={`${styles.footerContainer}`}>
            <Container className={`py-3 d-flex justify-content-between ${styles.footerText}`}>
                <div>
                    <Image src="/assets/HM_logo-White.png" alt="Hello Mobile Logo White" width={180} height={66} style={{ maxWidth: '180px' }} />
                    
                    <div className="mt-3 mb-1">Copyright © 2023 Hello Mobile™. All Rights Reserved</div>
                    <div className="d-flex gap-3">
                        <a href="https://dev.hellomobile.com/privacy">Privacy Policy</a>
                        <a href="https://dev.hellomobile.com/terms">Terms & Conditions</a>
                        <a href="https://dev.hellomobile.com/unsubscribe">Unsubscribe</a>
                    </div>
                </div>

                <div className="text-white d-flex gap-4">
                    <a href="https://twitter.com/hellomobile">
                        <FontAwesomeIcon icon={faTwitter} style={fontAwesomeIconStyle} />
                    </a>

                    <a href="https://www.instagram.com/hellomobile/">
                        <FontAwesomeIcon icon={faInstagram} style={fontAwesomeIconStyle} />
                    </a>

                    <a href="https://www.facebook.com/hellomobile">
                        <FontAwesomeIcon icon={faFacebook} style={fontAwesomeIconStyle} />
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faYoutube} style={fontAwesomeIconStyle} />
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faTiktok} style={fontAwesomeIconStyle} />
                    </a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer