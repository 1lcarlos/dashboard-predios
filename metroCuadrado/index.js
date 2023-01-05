import fetch from "node-fetch";
import * as cheerio from "cheerio";

const res = await fetch("https://kingsleague.pro/estadisticas/clasificacion/");
const html = await res.text();

const $ = cheerio.load(html);
$("table tbody tr  ").each((index, el) => {
  const rawTeam = $(el).find(".fs-table-text_3").text();
  const rawWins = $(el).find(".fs-table-text_4").text();
  const rawTLoses = $(el).find(".fs-table-text_5").text();
  const rawGoalsScored = $(el).find(".fs-table-text_6").text();
  const rawGoalsConceded = $(el).find(".fs-table-text_7").text();
  const rawCardsYellow = $(el).find(".fs-table-text_8").text();
  const rawCardsRed = $(el).find(".fs-table-text_9").text();

  console.log({ rawTeam, rawWins });
});

const predio = [
  {
    team: "Team 1",
    wins: 0,
    loses: 0,
    goalsScored: 0,
    goalsConceded: 0,
    cardsYellow: 0,
    cardsRed: 0,
  },
];
