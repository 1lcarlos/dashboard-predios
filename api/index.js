import { Hono } from "hono";
import leaderboard from "../db/leaderboard.json"

const app = new Hono();

app.get('/', (ctx)=>{
	return ctx.json([
		{
			endPoint: '/leaderboard',
			description: 'Returns the leaderboard'
		}
	]);
})

app.get('/leaderboard', (ctx)=>{
	return ctx.json(leaderboard);
})
export default app;
