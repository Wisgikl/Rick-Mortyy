const validation = (userData) =>{
    const errors = {};
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email= 'El email ingresado no es valido'
    }
    if(!userData.email){
        errors.email = "debe ingresar un email"
    }
    if(userData.email.length > 35){
        errors.email = "El email no puede superar los 35 caracteres"
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password='La contraseña debe contener al menos un número'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password='La contraseña debe tener una longitud de 6 a 10 caracteres'
    }
    return errors;
}

export default validation;
