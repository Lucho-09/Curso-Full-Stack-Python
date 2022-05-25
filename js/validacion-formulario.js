(function(){

    var formulario = document.getElementsByName('formulario-contacto')[0];

    var ValidarFormulario = function(e){
    
        // Validacion del campo nombre
        if (formulario.nombre.value == 0){
            alert("Completa el campo NOMBRE.");
            e.preventDefault();            
        }
    
        // Validacion del campo email
        else if (formulario.email.value == 0){
            alert("Completa el campo EMAIL.");
            e.preventDefault();            
        }

        else if (!(formulario.email.value.includes("@") && formulario.email.value.includes("."))){
            alert("Ingresa un EMAIL válido.");
            e.preventDefault();            
        }

        // Validacion del select motivo
        else if (formulario.motivo.value == -1){
            alert("Selecciona un motivo de contacto.");
            e.preventDefault();            
        }

        // Validacion del campo mensaje
        else if (formulario.mensaje.value == 0){
            alert("Ingresa un mensaje.");
            e.preventDefault();            
        }

        // Ingreso de datos (solo se muestra mensaje por enunciado de tp)
        else {
            alert("Tu mensaje se ha enviado con éxito! Te responderemos a la brevedad...");
        }
    };    

    formulario.addEventListener("submit", ValidarFormulario);
}())