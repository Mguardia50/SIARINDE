### SIARINDE V0.16
* Ahora se puede autentificar un usuario mediante google.
* Se actualizó la regla de firebase
### ISUES QUE NO SE LLEGARON A CORREGIR
* Al actualizar la pagina (refresh) se realiza el nuevo stock si es que el producto está cargado al carrito, ya que el stock se modifica en 2 ocasiones: al apretar el carrito para agregar al carrito de 
compras y al finalizar el pedido en el caso que el stock se haya modificado
* Si se modifica el stock en el carrito de compras (con el + y -), en la base de datos puede quedar negativo
* La galeria de imagenes todavía no funciona en ItemDetail

### SIARINDE V0.16
* Ahora se sube el monto total al servidor firestore
* Se actualiza el stock cuando se oprime el boton carrito en el itemDetail
* Cuando se presiona eliminar, se vuelve a actualizar el stock con el valor anterior
* A Corregir: si se refresca la página sin finalizar la compra, el stock se queda con el valor nuevo

### SIARINDE V0.15
* Se eliminaron comentarios y código sin uso
* Se arreglo el carrito, ahora muestra la cantidad de productos
* Ya no se muestran los productos listados que están en el carrito para no repetir compras
* Se guarda el pedido en firebase
* Se re diseño la forma de acceder a las categorias en la tienda
* Se eliminó los console.log debbug

### SIARINDE V0.11
* Ahora trae los productos desde firebaseapp
* Ya no hace un windows reload cuando se agrega productos
* el carrito esta roto...

### SIARINDE V0.1
* Ahora podes agregar items al carrito el cual se mostrara cuantos items hay en el menu carrito del NavBar
* En la pagina cart podes gestionar tu pedido, comprar, eliminar, etc.
* Cambios en renderizado condicional; aparecen, cambian, desaparecen botones según condición
* Ya no hace refresh page si clickeas en tienda, pero si en categoria

### SIARINDE V0.09
* Se agrego context para que se cree un nuevo array al hacer un pedido
* Ahora cuando se carga un pedido se suma al carrito
* En caso de ya estar pedido un producto, ahora ya no se podrá pedir


### SIARINDE V0.08

* Se agregaron algunos context para que se pueda tener el stock detallado de cada item
* Se sincronizo el contador
* Ahora cuando se clickea sobre el carrito en el itemdetail te lleva a la pagina CART




### SIARINDE V0.07

* Se llevo el código del Nav a un nuevo archivo NavBar.js y asi diferenciar el menu de navegacion del header
* Se modificó la navegación; antes era traida al 100% de una libreria, ahora solo los iconos
* Se creao la carpeta src/paginas donde estará cada pagina de la app
* Se agregó navegabilidad
* Se cambió la paleta de colores
* Se limpiaron algunos comentarios viejos, se pusieron nuevos comentarios
* Se añadieron categorias de lista de producto en la seccion tienda
* se añadieron subcategorias (no esta listo)
* se añadió un reload con un timeout para la navegacion