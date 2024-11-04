import Image from "next/image";
import styles from "../page.module.css"; // Assicurati che questo import sia presente

export default function Home() {
  return (
    <div className={styles.custom_center}>
      <title>
        Storia
      </title>
      <h1 className={styles.title}>Suzuki RM</h1>
      <p className={styles.custom_p}>
      La Suzuki RM 125 è stata una delle moto da cross più iconiche della casa giapponese Suzuki.
       L'RM 125, in produzione fin dagli anni '70, ha subito una serie di aggiornamenti e
        miglioramenti nel corso degli anni. La versione del 2008 rappresenta uno degli ultimi
        modelli prodotti prima che la Suzuki cessasse la produzione della sua gamma 2 tempi, 
      a causa della crescente popolarità dei motori a 4 tempi.
        
      </p>
    </div>
  );
}