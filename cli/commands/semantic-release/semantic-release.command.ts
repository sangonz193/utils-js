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
		const [, versionNumber] =
			(typeof spawnOut.stdout === "string"
				? spawnOut.stdout.match(/Published release (\d\.\d\.\d(-[\w+]\.\d)?)/)
				: undefined) ?? []

		if (!versionNumber) throw new Error("`stdoutString` is not of type string")
		console.log(`v${versionNumber}`)
	},
}

export default command
