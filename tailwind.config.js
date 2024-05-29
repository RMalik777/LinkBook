/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"main-light": "url('$lib/assets/bglight.svg')",
				"main-dark": "url('$lib/assets/bgdark.svg')"
			},
			colors: {
				theme: {
					black: "#222222",
					white: "#F5F5F5",
					purple: "#6E3FBD",
					green: "#01A9BE",
					yellow: "#FEB102",
					orange: "#FB580F"
				}
			}
		}
	},
	plugins: []
};
