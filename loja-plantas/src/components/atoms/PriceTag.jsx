import styles from "./PriceTag.module.css";

export default function PriceTag({ value }) {
  const formatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return <span className={styles.price}>{formatted}</span>;
}

