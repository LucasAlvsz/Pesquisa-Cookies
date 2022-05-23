import express from "express"
// import cookieParser from "cookie-parser"

const app = express()
// app.use(cookieParser())

app.get("/", (req, res) => {
	console.log(req.headers)
	res.send(" 🍪 Hello Cookies 🍪")
})

app.get("/set-cookie", (req, res) => {
	res.setHeader("set-cookie", "Cookie = De Cholocate")
	//res.cookie("Cookie", "Chocolate", {
	// maxAge: 5000, // 5 segundos
	// expires: new Date('26 July 2021'), // Data de expiração
	// httpOnly: true, // Não pode ser acessado via javascript
	// secure: true, // Não pode ser acessado via http somente https
	// domain: 'exemplo.com', // Apenas o domínio  exemplo.com
	//})
	// res.cookie("Cookie", "Chocolate")
	// res.cookie("Bolacha", "Morango")
	res.send(" 🍪 Cookie setado 🍪")
})

app.get("/get-cookie", (req, res) => {
	console.log(req.headers.cookie)
	res.send(req.headers.cookie)
	// res.send(req.cookies)
})

app.get("/del-cookie", (req, res) => {
	// res.clearCookie("Bolacha")
	res.send("Bolacha foi deletada 😂")
})

app.listen(5000, () => {
	console.clear()
	console.log("Your 🍪 Server started on port 5000")
})
