import Image from "next/image";
import styles from "../page.module.css"; // Assicurati che questo import sia presente

export default function Home() {
  return (
    <div className={styles.custom_center}>
      <h1 className={styles.title}>Suzuki RM</h1> 
      <p className={styles.custom_p}>
      La Suzuki RM 125 è stata ufficialmente ritirata dal mercato nel 2008, insieme a molte altre moto 2 tempi, segnando la fine di un'epoca.
Tuttavia, l'RM 125 è rimasta un simbolo di velocità e divertimento, con molti esemplari che sono ancora utilizzati e amati dagli appassionati di motocross di tutto il mondo.
Restauro e modifiche: Grazie alla sua semplicità meccanica e alla disponibilità di pezzi di ricambio, la RM 125 del 2008 è diventata una moto popolare per i progetti di restauro e per le gare di motocross vintage.
      </p>
    </div>
  );
}