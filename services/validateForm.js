const regex = /^\s+$/

const validateForm = (data) => {
    const messages  = [];
    console.log(data);
    if(regex.test(data.nombre)){
        messages.push({ field: 'nombre', message: 'no puede estar vacio'});
    }
    
    if(regex.test(data.apellido)){
        messages.push({ field: 'apellido', message: 'no puede estar vacio'});
    }
    if(regex.test(data.email)){
        messages.push({ field: 'email', message: 'no puede estar vacio'});
    }

    if(regex.test(data.mensaje) || data.mensaje.length < 1){
        messages.push({ field: 'mensaje', message: 'no puede estar vacio'});
    }
    return messages;
}

module.exports = validateForm;