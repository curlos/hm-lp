import { Container } from "react-bootstrap"
import styles from './Bogo.module.css'

const Bogo = () => {
    return (
        <div className={`${styles.bogoContainer}`}>
          <Container className="d-flex justify-content-center p-1">
            BOGO Deal Buy One Month, Get One Free!
          </Container>
        </div>
    )
}

export default Bogo