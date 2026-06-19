import styles from "./Indicator.module.css";
import PropTypes from "prop-types";

export default function Indicator({ icon, value, unit, label }) {
  return (
    <div className={styles.indicator}>
      <img src={icon} alt={`icone ${label}`} className={styles.icon} />
      <div className={styles.text}>
        <span className={styles.value}>
          {value}
          {unit}
        </span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}

Indicator.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
