const FormShipmentCartValidate = (info) => {
    const errors = {};

    if (!info.street) {
        errors.street = "debe ingresar una calle"
    }
    let streetSplit = info.street.split(" ")
    if (streetSplit.length > 5) {
        errors.street = "calle invalida"
    }
    if (info.street.length < 5) {
        errors.street = "calle invalida"
    }
    if (!info.number) {
        errors.number = "debe ingresar un numero"
    }
    if (info.number.length < 2 || info.number.length > 4) {
        errors.number = "numero invalido"
    }
    let provinceSplit = info.province.split(" ")
    if (provinceSplit.length > 5) {
        errors.province = "provincia invalida"
    }
    if (!info.province) {
        errors.province = "debe ingresar una provincia"
    }
    if (info.province.length < 5) {
        errors.province = "provincia invalida"
    }

    if (!info.city) {
        errors.city = "debe ingresar una ciudad"
    }
    if (info.city.length < 4) {
        errors.city = "ciudad invalida"
    }
    let citySplit = info.city.split(" ")
    if (citySplit.length > 5) {
        errors.city = "ciudad invalida"
    }

    



    return errors
}

export default FormShipmentCartValidate;