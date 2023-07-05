import styles from './Success.module.css';
import pagoExitoso from './pagoExitoso.jpg';

const Success = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TU COMPRA YA ESTÁ EN PROCESO</h1>
            <h3 className={styles.title}>¡GACIAS POR CONFIAR EN NOSOTROS!</h3>
            <img className={styles.imgDev} src={pagoExitoso} alt="" />
        </div>
      );
}

export default Success;