import PropTypes from 'prop-types';
import styles from "./Display.module.css";
const Display = ({displayVal}) => 
{
  return (
  <input className={styles.display} type="text" value={displayVal} readOnly/>
  )
};

Display.propTypes = {
  displayVal: PropTypes.string.isRequired,
};
export default Display;
