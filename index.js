let [, , method, resource, ...params] = process.argv;  
// Tips de desarrollo: 
//Usa process.argv para capturar.
//procesar los comandos ingresados yAprovecha el uso de destructuring y spread para manipular los datos.
// Uso de spread operator. 

method = method.toUpperCase();
resource = resource.toLowerCase();

// MOSTRAR TODOS LOS PRODUCTOS/////////////////////////////////////
if (method == "GET" && resource == "products") {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json();
  console.log(data);
  console.log("1ER REQUERIMIENTO - CONSULTAR TODOS LOS PRODUCTOS");

// MOSTRAR UN PRODUCTO IDENTIFICADO POR SU ID //////////////////////
} else if (method == "GET" && resource.startsWith("products/")) { // Uso el método de string startsWith() para verificar si la cadena comienza con "products/"
  let id = resource.split("/")[1];
  id = parseInt(id);

  if(isNaN(id) || id <=0) {
    console.log("ERROR DE TIPEO - VERIFICAR-");
  } else {
    const response = await fetch("https://fakestoreapi.com/products/" + id)
    const data = await response.json();
    console.log(data);
    console.log("2ER REQUERIMIENTO - CONSULTAR PRODUCTOS POR id");
  }

//AGREGAR UN NUEVO PRODUCTO //////////////////////////////////////////////////
} else if (method == "POST" && resource == "products") {
  const [title, price, category] = params; // Destructuring de params para obtener los valores de title, price y category

 // const product = {
//title: title,
//price: price,
//category: category,
  //};

// Creación de un objeto product utilizando shorthand property names
  const product = {
    title,
    price,
    category,
  };

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  console.log("3ER REQUERIMIENTO - AGREGAR UN PRODUCTO");

// ELIMINAR UN PRODUCTO IDENTIFICADO POR SU ID /////////////////////////////////  
} else if (method == "DELETE" && resource.startsWith("products/")) {
  const id = parseInt(resource.split("/")[1]); // Uso el método de string split() para separar la cadena en un arreglo

  if(isNaN(id) || id <=0) {
    console.log("ERROR DE TIPEO - VERIFICAR-");
  } else {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log("4TOR REQUERIMIENTO - BORRAR UN PRODUCTO POR id");
  }
} else {
  console.log("No se encontró una coincidencia");
}

