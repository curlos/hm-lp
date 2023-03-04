import { Col } from "react-bootstrap"
import styles from '../pages/savings/Savings.module.css'
import Image from "next/image"

const BuyOrBringPhoneOption = ({ option }) => {
    const { 
        Title,
        ImageSrc,
        MaxHeight,
        Url,
        ButtonText
    } = option

    return (
        <Col className={`${styles.colWithImageWrapper}`}>
            <div className={`${styles.buyOrBringPhoneTitle}`}>{Title}</div>
            <div className={`${styles.imageWrapper}`}>
                <img src={ImageSrc} alt="Hero Banner 2" style={{ maxHeight: MaxHeight ? MaxHeight : '100%' }} />
            </div>
            <a href={Url} className="darkBlueRoundedButton mt-4">{ButtonText}</a>
        </Col>
    )
}

export default BuyOrBringPhoneOption