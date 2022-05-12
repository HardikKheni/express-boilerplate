import app from './app';

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
	return res.json({
		status: 200,
		message: `Server is up and running at http://localhost:3000`,
	});
});

app.listen(PORT, () => {
	console.log(` 
  ***************************************
  *                                     *
  *      Server up & running on         *
  *      http://localhost:${PORT}          *
  *                                     * 
  ***************************************
  `);
});
