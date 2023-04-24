function ejecutar(){
	nombre=document.contacto.nombre.value;
	correo=document.contacto.correo.value;
	mensaje=document.contacto.mensaje.value;
	modelo=document.contacto.model.value;
	año=document.contacto.year.value;
	alert("Nombre: " +nombre + ". Correo: " + correo+ ". Mensaje: " + mensaje+ ".");
	alert("El usuario quiere vender su auto. Modelo: " +modelo + ". Año: " + año+ ".");
}