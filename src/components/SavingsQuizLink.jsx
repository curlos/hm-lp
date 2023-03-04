import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../pages/savings/Savings.module.css'

const SavingsQuizLink = () => {

    return (
        <Container className="mt-5">
          <div className={`${styles.savingsQuizLinkContainer}`}>
            <h3 className="font-32 font-weight-bold mb-0">
              Take Our Savings Quiz
            </h3>

            <div className="font-21 font-weight-semibold text-center">
              & See How You Can Save With <br />
              Our Prepaid Phone Plans  
            </div>

            <a href="https://dev.hellomobile.com/register/savings-quiz" className={`darkBlueRoundedButton mt-2 ${styles.takeQuizButton}`}>
                  <span></span>
                  <span>Take Quiz</span>
                  <span>
                    <FontAwesomeIcon icon={faAngleRight} style={{ height: "20px", fontWeight: "bold" }} />
                  </span>
            </a>
          </div>
        </Container>
    )
}

export default SavingsQuizLink