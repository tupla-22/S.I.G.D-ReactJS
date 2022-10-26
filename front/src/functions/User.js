export const getToken = () => {
	try {
		return JSON.parse(localStorage.getItem("user")).token_usuario
	} catch (e) {
		console.log(e)
	}
}
