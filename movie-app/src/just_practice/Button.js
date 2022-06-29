import PropTypes from 'prop-types'


import styles from './Button.module.css'

function Button({text}){
    return <div>
        <button className={styles.btn}>{text} </button>
        <span className={styles.span}>new sapn</span>
    </div>
}

export default Button



// Button.propTypes = {
//     text: PropTypes.string.isRequired
// }
