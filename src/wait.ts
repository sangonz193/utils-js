export async function wait(ms: number = 0) {
	await new Promise((resolve) => setTimeout(resolve, ms))
}
