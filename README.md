# Instrucciones

## !importante:
1. Crea una branch a partir de MAIN llamada: BREILYN-separated-components

Tienes una aplicacion con un formulario que agrega tareas o actividades a una lista, estas tareas se pueden eliminar una vez agregadas o bien se pueden guardar en otra lista.

Ya que toda la logica actual se encuentra en App.js, debes crear un directorio llamado 'components' dentro de este directorio debes tener un componente llamado NewElementList, este NewElementList es el padre de ElementShow.
ElementShow contiene la estructura de los li a desplegar.

Luego debes tener otro componente llamado SavedElementList, este SavedElementList es el padre de SavedElementShow, que contiene la estructura de los li a mostrar dentro del ul.

Luego necesitamos instalar json-server para poder guardar los elementos de la lista en una API local, el archivo puede llamarse: item-list.json
que debe contener una estructura similar a esta:

{
    "new-elements":[],
    "saved-elements": []
}


La idea es que al crear una actividad esta se almacene en new-elements y al guardar esa actividad esta se almacene en saved-elements y a su vez se elimina de new-elements.

Una vez terminado este proceso, necesito que hagas commit envies un Pull Request con estos cambios en esta branch y vamos al numero 2.

## !importante:
2. Crea otra branch a partir de BREILYN-separated-components, llamada: BREILYN-separated-components-context de esta forma todos los cambios que hiciste antes vas a traertelos a esta nueva branch.

Ahora necesitamos que todas las funciones que antes creamos esten en un Context Provider y podamos ejecutar las mismas funciones que antes hicimos.

