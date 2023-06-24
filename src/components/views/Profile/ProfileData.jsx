import { useSelector } from "react-redux";

const ProfileData = () => {

    const { currentUser } = useSelector(state => state.user);

    const [imgLink] = currentUser.picture.split('=');

    return(
        <div>
            <p>Tus datos:</p>
            <img src={imgLink} alt={currentUser.name} />
            <p>{currentUser.name}</p>
            <p>{currentUser.nickname}</p>
            <p>{currentUser.email}</p>
        </div>
    )
}

export default ProfileData;