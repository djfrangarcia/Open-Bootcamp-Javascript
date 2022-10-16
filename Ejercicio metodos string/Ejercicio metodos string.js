// Ejercicio sesion 04
// Crea un archivo JS que contenga las siguientes líneas

// Una cadena de texto con tu Nombre
let nombre = "Fran"
// Otra cadena de texto con tu Apellido
let apellido = "Miguel";
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let num_letras = estudiante.length;
console.log(num_letras);

// Una variable que contenga la primera letra del Nombre
let primera_letra_nombre = nombre.charAt(0);
console.log(primera_letra_nombre);

// Otra variable que contenga la última letra del Apellido
let ultima_letra_apellido = apellido.charAt(apellido.length -1);
console.log(ultima_letra_apellido)

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let elimina_espacios = estudiante.replace(/\s+/g, "");
console.log(elimina_espacios);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombre_boolean = estudiante.includes(nombre);
console.log(nombre_boolean)