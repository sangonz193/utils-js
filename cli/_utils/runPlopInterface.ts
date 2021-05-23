import { Plop, run } from "plop"

import { hasProperty } from "../../src/hasProperty"

export type RunPlopInterfaceOptions = {
	plopFilePath: string
	generator?: string
	bypassAnswers?: string[]
}

export const runPlopInterface = (options: RunPlopInterfaceOptions) => {
	Plop.launch(
		{
			configPath: options.plopFilePath,
		},
		(env) =>
			run(
				env,
				undefined,
				false,
				options?.generator,
				options && hasProperty(options, "bypassAnswers") ? options?.bypassAnswers : undefined
			)
	)
}
