import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
])

export default eslintConfig
