import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const res = await fetch('https://www.metrocuadrado.com/casa/venta/bogota/');
const html = await res.text();
/* console.log(html); */
const $ = cheerio.load(html);
$('div a').each((index,el) => {
    console.log($(el).text());
})

const predios = [{
    titulo: 'nombre',
    precio: 0,
    area: 0
}]