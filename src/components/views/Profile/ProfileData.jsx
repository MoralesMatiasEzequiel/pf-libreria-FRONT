import { useSelector } from "react-redux";
import styles from './ProfileData.module.css';

const ProfileData = () => {

    const { currentUser } = useSelector(state => state.user);

    const imgLink = currentUser?.picture ? currentUser.picture.split('=')[0] : '';

    return (
        <div className={styles.view}>
            <h1 className={styles.title}>DATOS</h1>
            <div className={styles.container}>
                <div className={styles["image-container"]}>
                    <img src={imgLink} alt={currentUser.name} />
                </div>
                <div className={styles["data-container"]}>
                    <p>Usuario: {currentUser.name}</p>
                    <p>Apodo: {currentUser.nickname}</p>
                    <p>Email: {currentUser.email}</p>
                </div>
            </div>
        </div>
      );
}

export default ProfileData;
