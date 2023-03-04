import { Container, Row, Col } from "react-bootstrap"
import { LINE_OR_PLANS } from "@/utils/plans"
import styles from '../pages/savings/Savings.module.css'

const LineOrPlan = ({ lineOrPlan }) => {
    const imageDescription = lineOrPlan.descriptions.join(' ')

    return (
        <Col key={lineOrPlan.descriptions[0]} className={`${styles.colWithImageWrapper}`}>
            <div className={`${styles.imageWrapper}`}>
                <img src={lineOrPlan.ImageSrc} alt={imageDescription} style={{ maxHeight: lineOrPlan.MaxHeight ? lineOrPlan.MaxHeight : '163px' }} />
            </div>
            <div className={`${styles.lineOrPlanDesc}`}>
                {lineOrPlan.descriptions.map((description) => (
                    <div key={description}>{description}</div>
                ))}
            </div>
        </Col>
    )
}

const SelectYourLinesAndPlan = () => {

    return (
        <Container className={`${styles.selectYourLinesAndPlanContainer} mt-6`}>
          <h2 className="font-40 font-weight-bold mb-5">
            Select Your Lines & Your Plan
          </h2>

          <Row className="text-center font-20 font-weight-semibold mt-6 gap-10">
            {LINE_OR_PLANS.map((lineOrPlan) => (
                <LineOrPlan key={lineOrPlan.descriptions[0]} lineOrPlan={lineOrPlan} />
            ))}
          </Row>
        </Container>
    )
}

export default SelectYourLinesAndPlan