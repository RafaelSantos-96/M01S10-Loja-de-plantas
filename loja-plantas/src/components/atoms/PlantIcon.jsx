import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import styles from "./PlantIcon.module.css";

export default function PlantIcon({ size = "md" }) {
  const sizeMap = {
    sm: 20,
    md: 32,
    lg: 48,
  };

  return (
    <LocalFloristIcon
      style={{ fontSize: sizeMap[size] || sizeMap.md }}
      className={styles.icon}
    />
  );
}

