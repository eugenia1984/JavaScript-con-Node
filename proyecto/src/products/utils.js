const excelGenerator = (products, name, res) => { // asi ya recibo el nombre del archivo
  const xl = require('excel4node');

  products = products.map( (product) => {   // map a los productos para buscar el string del id
    let id = product._id.toString();
    delete product._id; // para eliminar el producto id
    return {
      id,
      ...product
    }
  })

  let wb = new xl.Workbook(); // para generar el libro de excel
  let ws = wb.addWorksheet('inventario'); //para generar una nueva hoja en el excel
   // como el excel tiene filas (numeradas) y columnas (con letras) lo veo como una matriz, por eso uso dos for para recorrer filas - columnas
  for (let i = 1; i <= products.length; i++){ // recorro filas
    for (let j = 1; j <= Object.values(products[0]).length; j++) {  // recorro columnas
      let data = Object.values(products[i - 1])[j - 1];// obtengo los datos
      // hay que especificar el tipo de valor a agregar en la celda
      if (typeof data === 'string') {
        ws.cell(i, j).string(data);
      } else {
        ws.cell(i, j).number(data);
      }
      // almaceno los datos en las celdas
    }
  }

  wb.write(`${name}.xlsx`, res); 
};

module.exports.ProductsUtils = {
  excelGenerator
}