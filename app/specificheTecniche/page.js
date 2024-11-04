import Image from "next/image";
import styles from "../page.module.css"; // Assicurati che questo import sia presente

export default function Home() {
  return (
    <div className={styles.custom_center}>
      <h1 className={styles.title}>Suzuki RM</h1> 
      <p className={styles.custom_p}>
        Motore: Il modello del 2008 era dotato di un motore a 2 tempi monocilindrico da 124 cc, raffreddato a liquido. Questo motore era apprezzato per la sua potenza elevata e per la capacità di erogare coppia rapidamente, ideale per affrontare salti e terreni accidentati.
        Telaio: Il telaio era leggero e robusto, progettato per garantire agilità e controllo anche nelle condizioni più difficili. Il telaio in acciaio e il design compatto rendevano la moto facile da manovrare.
        Sospensioni: Il sistema di sospensione era uno dei punti di forza della RM 125, con forcelle anteriori Showa regolabili e un ammortizzatore posteriore di alta qualità, pensato per assorbire urti e offrire stabilità anche nei terreni più irregolari.
        Design: La RM 125 del 2008 manteneva il classico look aggressivo della serie RM, con grafiche moderne, linee affilate e una livrea gialla e nera che esaltava l'identità sportiva della moto.  
      </p>
    </div>
  );
}