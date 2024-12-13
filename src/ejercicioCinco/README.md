Ejercicio 5: Creación de Componentes Reutilizables Básicos

Requisitos Mínimos (3 días):

Crear un componente reutilizable de campo de entrada (InputField):

Descripción:

Crear un componente que represente un campo de entrada de texto genérico.
Debe ser capaz de manejar diferentes tipos de inputs: texto, correo electrónico, contraseña, etc.
Características del InputField:

Props necesarias:
label: Etiqueta que describe el campo.
type: Tipo de input (por ejemplo, "text", "email", "password").
name: Nombre del campo para identificación.
value: Valor actual del input.
onChange: Función para manejar cambios en el input.
placeholder (opcional): Texto de ayuda dentro del input.
required (opcional): Indica si el campo es obligatorio.
Implementación:

El componente debe renderizar una etiqueta (<label>) y un input (<input>) asociados.
Asegurar que los eventos y valores se manejan correctamente a través de las props.
Refactorizar el formulario existente para utilizar el componente InputField:

Reemplazar los inputs directos en el formulario por el componente InputField.
Aplicar el componente a los campos:
"Nombre"
"Apellido"
"Correo Electrónico"
"Contraseña"
"Confirmar Contraseña"
Verificación y pruebas:

Asegurarse de que el formulario sigue funcionando correctamente con los nuevos componentes.
Las validaciones y el manejo de estados deben permanecer intactos.
Al enviar el formulario, los datos deben mostrarse correctamente en la consola.
Extra (1 día):

Crear un componente reutilizable para casillas de verificación (CheckboxField):

Descripción:

Crear un componente que represente una casilla de verificación individual.
Características del CheckboxField:

Props necesarias:
label: Etiqueta que describe la casilla.
name: Nombre del campo.
checked: Estado actual de la casilla (true o false).
onChange: Función para manejar cambios en la casilla.
Implementación:

El componente debe renderizar una etiqueta y un input de tipo checkbox asociados.
Añadir una casilla de verificación al formulario utilizando CheckboxField:

"Aceptar Términos y Condiciones":
Añadir esta casilla al formulario.
Hacer que sea un campo obligatorio; el usuario debe aceptarlos para poder enviar el formulario.
Estilizar los componentes:

Aplicar estilos básicos para mejorar la apariencia de los componentes y el formulario en general.
Asegurarse de que los componentes tengan una apariencia consistente y sean fáciles de usar.
Objetivos del Ejercicio:

Introducir la creación de componentes reutilizables básicos:
Comprender cómo encapsular lógica y presentación en componentes que pueden ser usados en diferentes partes de la aplicación.
Promover código limpio y mantenible:
Reducir la duplicación de código y facilitar futuras ampliaciones o modificaciones.
Practicar el paso de props y manejo de eventos en componentes:
Fortalecer la comprensión de cómo los componentes padres e hijos se comunican en React.
Consejos

Comienza con el componente InputField:

Crear el componente en un archivo separado, por ejemplo src/components/InputField.js.
Definir las props que el componente recibirá y usarlas para renderizar el input y la etiqueta.
Asegurarse de que el evento onChange actualiza correctamente el estado en el componente padre.
Refactoriza el formulario gradualmente:

Reemplaza los inputs uno por uno, verificando que cada cambio funciona antes de continuar.
Después de cada reemplazo, prueba el formulario para asegurarte de que no hay errores.
Creación del componente CheckboxField:

Sigue un proceso similar al de InputField.
Presta atención al manejo del estado booleano (true o false) para la casilla de verificación.
Validaciones y estado:

Asegúrate de que las validaciones existentes siguen funcionando con los nuevos componentes.
Si encuentras problemas, revisa cómo se están pasando las funciones y valores entre componentes.
Estilizado básico:

Puedes utilizar CSS básico o estilos en línea para mejorar la apariencia.
Concéntrate en una apariencia limpia y consistente.
Recursos Útiles

Documentación de React sobre componentes y props:
Componentes y Props – React

Manejo de eventos en React:
Manejo de Eventos – React