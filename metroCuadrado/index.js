import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const res = await fetch('https://kingsleague.pro/estadisticas/clasificacion/');
const html = await res.text();
/* console.log(html); */

const $ = cheerio.load(html);
$('table tbody tr').each((index,el) => {
    const rawTitulo = $(el).find('.fs-table-text_3').text();


    console.log({rawTitulo});
})

const predio = [{
    titulo: 'nombre',
    precio: 0,
    area: 0
}]