import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={`${styles.headerContainer} p-3`}>
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <Image src="/assets/hello-mobile-logo.png" alt="Hello Mobile Logo" width={165} height={66} />
                    
                    <div>
                        <div>Call for Assistance</div>
                        <div>1 (888) 95-HELLO</div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header