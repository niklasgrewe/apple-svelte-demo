import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

import "./assets/global.css";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv("__sapper__/" + (!dev ? "build" : "dev") + "/server/static", {
			dev,
		}),
		sirv("static", { dev }),
		sapper.middleware()
	)
	.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
