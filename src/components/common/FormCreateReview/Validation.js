const validation = (formData) => {
    const errors = {}

    if (!formData.message) {
        errors.message = "Debe dejar una reseña"
    }
    if (formData.message.length > 200) {
        errors.message = "La reseña debe ser menor a 200 caracteres"
    }
    
    return errors
}

export default validation;