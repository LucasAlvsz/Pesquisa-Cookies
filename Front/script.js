function novoCookie() {
	nome = "Cookie"
	valor = Math.floor(Math.random() * (10 + 1))
	let cookie = nome + "=" + valor
	document.cookie = cookie
	document.querySelector(".Cookie").innerHTML =
		"Cookie Atual: " + document.cookie
	// window.location.reload()
}
