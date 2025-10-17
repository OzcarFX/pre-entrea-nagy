//console.log(process.argv);

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == "GET" && resource == "products") {
	//console.log("obtener productos");
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
}
console.log("SE OBTUVIERON TODOS LOS PRODUCTOS");
