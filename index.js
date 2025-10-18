//console.log(process.argv);

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == "GET" && resource == "products") {
	const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json();
  console.log(data);

  //  fetch('https://fakestoreapi.com/products')
  //.then(response => response.json())
  //.then(data => console.log(data));
}
console.log("1ER REQUERIMIENTO - CONSULTAR TODOS LOS PRODUCTOS");

// MOSTRAR IN ID EN PARTICULAR
if (method == "GET" && resource.startsWith("products/")) {
	let id = resource.split("/")[1];
  id = parseInt(id);

  if(isNaN(id) || id <=0) {
    console.log("ERROR DE TIPEO - VERIFICAR-");
  }

  fetch("https://fakestoreapi.com/products/" + id)
  .then(response => response.json())
  .then(data => console.log(data));

}
console.log("2ER REQUERIMIENTO - CONSULTAR PRODUCTOS POR id");

