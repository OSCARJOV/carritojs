const carrito = document.getElementById('carrito') // CAPTURO EL ID DE DONDE SE VAN A PINTAR LOS ELEMENTOS.
                                                    // si fuera GetElementQuerySelector llevaria el #
                                                   
const template = document.getElementById('template')            
const fragment = document.createDocumentFragment()  // para evitar el reflow
const botones = document.querySelectorAll('.card .btn') // selecciono los botonoes desde la clase que los contiene

// con esto capturo todos los elementos

const carritoObjeto = {};

const agregarAlcarrito = (e) => {
 console.log(e.target.dataset.fruta ); //con dataset accedo al valor de data- en el index

 const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
 };

 if(carritoObjeto.hasOwnProperty(producto.titulo)){  // hasOwnProperty si existe producto.id busca lo qu hay en cantidad y le suma uno
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1
 }
 carritoObjeto[producto.titulo] = producto;

 pintarCarrito(producto)
 //console.log(carritoObjeto);

};

const pintarCarrito = (producto) => {
   // console.log('pintar farritooooooo', producto);
   carrito.textContent = "";

   Object.values(carritoObjeto).forEach(item => {
    const clone = template.content.firstElementChild.cloneNode(true)
    clone.querySelector('.lead').textContent = item.titulo // escojo la clase .lead
    clone.querySelector('.badge').textContent = item.cantidad

    fragment.appendChild(clone)
   })

   carrito.appendChild(fragment)
};

botones.forEach((btn1) => btn1.addEventListener("click", agregarAlcarrito ))