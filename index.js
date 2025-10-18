let [, , method, resource, ...params] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

// MOSTRAR TODOS LOS PRODUCTOS/////////////////////////////////////
if (method == "GET" && resource == "products") {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json();
  console.log(data);
  console.log("1ER REQUERIMIENTO - CONSULTAR TODOS LOS PRODUCTOS");

// MOSTRAR UN PRODUCTO IDENTIFICADO POR SU ID //////////////////////
} else if (method == "GET" && resource.startsWith("products/")) {
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
  const [title, price, category] = params;

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
  const id = parseInt(resource.split("/")[1]);

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

