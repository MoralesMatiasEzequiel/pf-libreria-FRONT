import "./SideFiltersStyle.css";

const Side = () => {


    const despliegue = () => {

        let listelements = document.querySelector('.list_item--click')

        listelements.addEventListener('click', () => {
            listelements.classList.toggle('arrow');

            let height = 0;
            let menu = document.querySelector('.list__show')

            if (menu.clientHeight === "0") {
                height = menu.scrollHeight;
            }
            menu.style.height = `${height}px`
        })

    }
    const Marca = () => {
        alert("matiasGarrbanzo")
    }

    return (
        <div className="nav">
            <ul className="list">
                <li onClick={despliegue} className="list_item list_item--click">
                    <div className="list_button list_button--click">
                        <b href="#" className="nav_link">Marcas</b>
                        <b className="list_arrow">V</b>
                        {/* <img src="" className="list_arrow" /> */}
                    </div>

                    <ul className="list__show" >
                        <li className="list_inside">
                            <b onClick={Marca} href="#" className="nav__link nav__link--inside">Lego</b>
                            <b onClick={Marca}href="#" className="nav__link nav__link--inside">PlayBoy</b>
                            <b onClick={Marca}href="#" className="nav__link nav__link--inside">Glock</b>
                            <b onClick={Marca}href="#" className="nav__link nav__link--inside">Toyota</b>
                        </li>
                    </ul>

                </li>
            </ul>
        </div>
    )

}

export default Side;