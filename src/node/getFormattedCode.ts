import { CLIEngine } from "eslint";

export const getFormattedCode = (code: string, options: { possibleFilePath: string; configFile: string }): string => {
	return (
		new CLIEngine({ fix: true, configFile: options.possibleFilePath }).executeOnText(code, options.possibleFilePath)
			.results[0].output ?? code
	);
};
