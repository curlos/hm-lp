import { Container, Row } from "react-bootstrap"
import styles from '../pages/savings/Savings.module.css'
import FAQs from "./FAQs"

const FAQSection = () => {
    return (
        <Container className={`${styles.buyOrBringPhoneContainer} mt-6`}>
          <h2 className="font-32 font-weight-bold mb-4">
            Ready to experience the benefits of our wireless service at no risk?
          </h2>

          <FAQs />
        </Container>
    )
}

export default FAQSection