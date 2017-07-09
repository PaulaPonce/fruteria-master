# Lección 13 - Git y Github

Creamos una lista de frutas para la frutería Master.

index.html lleva un título, párrafos e imagen. Para el catálogo se crea una lista ordenada donde irán las frutas y un formulario con un input y un botón para añadir nuevas frutas al catálogo.

Se añade evento click en el botón para añadir nuevas frutas, que se irán agregando a la lista.
El input se valida, si está vacío crea un span para notificar al usuario que debe ingresar una fruta, si no, añade la fruta a la lista.

Usando git, mediante comandos creamos la carpeta para el proyecto y subcarpetas donde irán los archivos .html .js .css
En github creamos el repositorio remoto para el proyecto.

**Creando el repositorio desde el pc (lección-13)**

 * git init #creamos el repositorio fruteria-master
 * en github creamos el repositorio remoto
 * vinculamos ambos repositorios con git remote add origin https://github.com/PaulaPonce/fruteria-master.git
 * git add . #agregamos los cambios
 * git commit –m “mensaje” #se pasan los cambios al repositorio remoto
 * git push origin master #para subir los cambios a github

[gh-pages](https://paulaponce.github.io/fruteria-master)

[Paleta de colores](https://color.adobe.com/es/TB2TtRNhFXXXXXTXXXXXXXXXXXX-803732565-color-theme-9745661/edit/?copy=true&base=2&rule=Custom&selected=2&name=Copia%20de%20TB2TtRNhFXXXXXTXXXXXXXXXXXX-803732565&mode=rgb&rgbvalues=0.7490196078431373,0.09019607843137255,0.13725490196078433,0.8509803921568627,0.15294117647058825,0.2549019607843137,0.9568627450980393,0.8901960784313725,0.8509803921568627,0.1450980392156863,0,0,0.9490196078431372,0.7450980392156863,0.7294117647058823&swatchOrder=0,1,2,3,4)