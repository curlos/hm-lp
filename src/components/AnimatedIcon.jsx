import Lottie from 'lottie-react'
import styles from '../pages/savings/Savings.module.css'

const AnimatedIcon = ({ iconDetails }) => {

  const { animationData, descriptions } = iconDetails

  return (
    <div className={`${styles.iconWrapper}`}>
      <Lottie animationData={animationData} loop={true} style={{ height: '75px' }} />
      <div className={`${styles.iconDescription}`}>
        <div>
          {descriptions.map((description) => (
            <div key={description}>{description}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedIcon