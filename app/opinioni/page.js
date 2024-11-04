import Image from "next/image";
import styles from "../page.module.css"; // Assicurati che questo import sia presente

export default function Home() {
  return (
    <div className={styles.custom_center}>
      <h1 className={styles.title}>Suzuki RM</h1> 
      <p className={styles.custom_p}>
      La Suzuki RM 125 è una moto che riesce a combinare il divertimento con una qualità sorprendente, anche a distanza di anni dal suo lancio. È una di quelle moto che, nonostante il tempo passato, mantiene ancora una vitalità e una performance quasi al livello di una moto nuova. La sua leggerezza e agilità la rendono ideale per chi cerca un’esperienza di guida vivace e dinamica. La RM 125 non è solo un mezzo per spostarsi: è una compagna che rende ogni uscita un momento di puro divertimento, grazie al motore reattivo e alla facilità di controllo che offre. 
      A livello estetico, può mostrare segni del tempo, ma la qualità costruttiva fa sì che resti una scelta apprezzabile. Anche chi ha provato modelli più recenti riconosce che, pur con qualche differenza in termini di tecnologia, questa moto non delude mai, riuscendo ancora a dare soddisfazioni grazie alla sua grande affidabilità e al suo carattere grintoso.
      </p>
    </div>
  );
}