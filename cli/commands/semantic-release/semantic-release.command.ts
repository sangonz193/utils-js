import { spawn } from "promisify-child-process"
import type { CommandModule } from "yargs"

import { projectPath } from "../../_utils/projectPath"

const command: CommandModule<{}, {}> = {
	command: "semantic-release",

	describe: false,

	handler: async () => {
		const spawnOut = await spawn("npx", ["semantic-release"], {
			cwd: projectPath,
			encoding: "utf8",
		})
		const spawnOutString = typeof spawnOut.stdout === "string" ? spawnOut.stdout : undefined

		console.log({ spawnOutString })
		const [, versionNumber] = spawnOutString?.match(/Published release (\d\.\d\.\d(-[\w+]\.\d)?)/) || []

		if (!versionNumber) throw new Error("`versionNumber` is not of type string")
		console.log(`v${versionNumber}`)
	},
}

export default command
