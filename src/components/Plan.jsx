import styles from './Plan.module.css'

const Plan = ({ planDetails }) => {
    const { 
        price,
        type,
        gigs,
        description,
        bestValue,
        styles: {
            topHalfColor,
            topHalfBackgroundColor
        }
    } = planDetails

    const [ dollars, cents ] = price.split('.')


    return (
        <div className={`${styles.planWrapper} text-center`}>
            <div className={`${styles.planBestValueTagWrapper}`} style={{ visibility: `${bestValue ? 'visible' : 'hidden' }`}}>
                <div className={`${styles.planBestValueTag}`}>Best Value</div>
            </div>

            <div className={`${styles.planTopHalf}`} style={{ 
                color: topHalfColor,
                backgroundColor: topHalfBackgroundColor
            }}>
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="font-32 mb-2">$</div>
                    <div className="font-74">{dollars}</div>
                    <div className={`font-24 ${styles.priceAMonth}`}>
                        <div>{cents && `.${cents}`}</div>
                        <div>/mo.</div>
                    </div>
                </div>

                <div className="text-center font-28 mt-n4 pb-3">
                    {gigs}
                </div>
            </div>

            <div className={`${styles.planBottomHalf}`}>
                <div className={`${styles.planDetails}`}>
                    <div>{description["01"]}</div>
                    <div>{description["02"]}</div>
                    <div>{description["03"]}</div>
                </div>

                <a href="https://dev.hellomobile.com/register/phone" className="yellowRoundedButton">Add to Cart</a>

                <a href="https://dev.hellomobile.com/shop/plans" className={`${styles.planLink}`}>See What We Can Offer</a>
            </div>
        </div>
    )
}

export default Plan