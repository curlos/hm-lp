import { Container, Row } from "react-bootstrap"
import BuyOrBringPhoneOption from "./BuyOrBringPhoneOption"
import { BUY_OR_BRING_PHONE_OPTIONS } from "@/utils/plans"
import styles from '../pages/savings/Savings.module.css'

const BuyOrBringPhoneList = () => {

    return (
        <Container className={`${styles.buyOrBringPhoneContainer} mt-6`}>
          <h2 className="font-40 font-weight-bold mb-4">
            Buy Or Bring Your Own Phone
          </h2>

          <Row className="gap-10">
            {BUY_OR_BRING_PHONE_OPTIONS.map((option, i) => (
              <BuyOrBringPhoneOption key={option.Title} option={option} />
            ))}
          </Row>
        </Container>
    )
}

export default BuyOrBringPhoneList