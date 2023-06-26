const Validation = (newProduct) => {

    const errors = {};

    if (!newProduct.name) {
        errors.name = 'Colócale un nombre al producto'
    }
    if (!newProduct.brand) {
        errors.brand = 'Detalla la marca de tu producto'
    }
    if (!newProduct.stock) {
        errors.stock = 'Detalla cuantos productos tienes disponible'
    }
    if (!newProduct.price) {
        errors.price = 'Colócale un precio de venta'
    }
    if (!newProduct.imagen) {
        errors.imagen = 'Colócale una imagen donde se muestre el producto'
    }

    if (!newProduct.subcategories) {
        errors.subcategories = 'Señala a cual subcategories pertenece'
    }
    // ------------------------------nombre
    if (newProduct.name.length > 18) {
        errors.name = 'El nombre con mas de 18 caracteres no ve verá '
    }
    if (newProduct.name.length > 0 && newProduct.name.length < 5) {
        errors.name = 'Un nombre con menos de 5 crts no ayudará con la busqueda '
    }
    // -------------------------------marca
    if (newProduct.brand.length > 10) {
        errors.brand = 'La marca es muy larga'
    }
    // -------------------------------stock
    if (newProduct.stock > 1000) {
        errors.stock = ' Pará bld, tanto tenés ? '
    }
    if (newProduct.stock < 0) {
        errors.stock = 'la cantidad debe expresarse con números positivos'
    }

    // -------------------------------precio
    if (newProduct.price > 99999) {
        errors.price = 'FUA bld, cura el cancer acaso ?'
    }
    if (newProduct.price.length > 0 && newProduct.price < 10) {
        errors.price = 'Que, lo vas a regalar ? pa eso andá y donalo bld....'
    }
    
    // -------------------------------imagen
    if (newProduct.image.length < 15) {
        errors.defensa = 'Recuerda debe ser url'
    }

    // -------------------------------subcategorias
    if (newProduct.subcategories.length < 22) {
        errors.subcategories = 'Tu producto debe pertenecer a una categoria '
    }

    return errors;
}

export default Validation;

