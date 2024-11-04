import Image from "next/image";
import styles from "./page.module.css"; 

export default function Home() {
  return (
    <div className={styles.custom_center}>
      <title>Home</title>
      <h1 className={styles.title}>Suzuki RM</h1>
      <p className={styles.custom_p}>
        La Suzuki RM 125 del 2008 è una leggenda del motocross, 
        un'icona dell'era dei motori a 2 tempi. Con il suo design leggero, 
        l'accelerazione esplosiva e la maneggevolezza eccezionale,
        questa moto è stata l'ultima versione prodotta di una lunga serie di modelli che 
        hanno dominato le piste di tutto il mondo. Ideale per chi cerca prestazioni pure e 
        un'esperienza di guida autentica, la RM 125 continua a essere amata dagli appassionati 
        per il suo spirito competitivo e la sua capacità di affrontare i terreni più impegnativi. Scopri la storia, le specifiche e la bellezza di questa moto che ha fatto la storia del motocross.
      </p>
    </div>
  );
}