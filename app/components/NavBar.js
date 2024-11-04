// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <Link href={"/"}>
          <img src="/images/logo.png" alt="Logo" style={styles.logo}></img>
        </Link>
        
      </div>
      <ul style={styles.menu}>
        {/* Link di navigazione */}
        <li style={styles.menuItem}>
          <Link href="/storia">Storia</Link>
        </li>
        <li style={styles.menuItem}>
          <Link href="/specificheTecniche">Specifiche tecniche</Link>
        </li>
        <li style={styles.menuItem}>
          <Link href="/eredita">Eredità</Link>
        </li>
        <li style={styles.menuItem}>
          <Link href="/opinioni">Opinioni</Link>
        </li>
      </ul>
    </nav>
  );
};
const styles = {
  
  navbar: {
    display: 'flex',
    justifyContent: 'space-between', // Cambia questo in 'space-around' o 'space-evenly'
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    fontFamily:'JetBrains Mono, monospace',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  menu: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    flexGrow: 1, // Aggiungi questa linea per far crescere il menu
    justifyContent: 'space-around', // Cambia in 'space-around' o 'space-evenly'
  },
  menuItem: {
    marginLeft: '20px',
  },
};

export default NavBar;
