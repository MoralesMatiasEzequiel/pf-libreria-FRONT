const FormInfoValidate = (info) => {
    const errors = {};

    if (!/\S+@\S+\.\S+/.test(info.email)) {
        errors.email = "el email ingresado no es valido."
    }
    if (!info.email) {
        errors.email = "debe ingresar un email."
    }
    if (info.email.length > 35) {
        errors.email = "el email no debe superar los 35 caracteres."
    }
    if (info.name.length < 3) {
        errors.name = "nombre invalido"
    }
    if (!info.name) {
        errors.name = "debe ingresar un nombre"
    }
    let nameSplit = info.name.split(" ")
    if (nameSplit.length > 1) {
        errors.name = "solo debe ingresar el primer nombre"
    }
    if (info.surname.length < 3) {
        errors.surname = "apellido invalido"
    }
    if (!info.surname) {
        errors.surname = "debe ingresar un apellido"
    }
    let surnameSplit = info.surname.split(" ")
    if (surnameSplit.length > 1) {
        errors.surname = "solo debe ingresar el primer apellido"
    }
    if (!info.phone) {
        errors.phone = "debe ingresar un numero telefonico"
    }
    if (info.phone.length != 10) {
        errors.phone = "numero invalido"
    }
    if (!info.dni) {
        errors.dni = "debe ingresar su dni"
    }
    if (info.dni.length < 7 || info.dni.length > 9) {
        errors.dni = "dni invalida"
    }
    if (info.dni.includes(".")) {
        errors.dni = "no debe incluir puntos"
    }



    return errors
}

export default FormInfoValidate;