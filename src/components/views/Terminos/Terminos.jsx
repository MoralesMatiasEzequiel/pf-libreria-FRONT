import styles from './Terminos.module.css';
import WorkingImage from './Working.png';

const Terminos = () => {


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>FEATURE A DESARROLLAR</h1>
            <img className={styles.imgDev} src={WorkingImage} alt="" />
        </div>
      );
}

export default Terminos;