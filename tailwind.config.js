let defaultFontFamily = [
	"system-ui",
	"-apple-system",
	"BlinkMacSystemFont",
	'"Segoe UI"',
	"Roboto",
	'"Helvetica Neue"',
	"Arial",
	'"Noto Sans"',
	"sans-serif",
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
	'"Noto Color Emoji"',
];

module.exports = {
	theme: {
		extend: {
			fontSize: { "4xl": "2.5rem", "7xl": "5rem", "10xl": "12rem" },
		},
		fontFamily: {
			sans: ["SFProDisplay", ...defaultFontFamily],
			text: ["SFProText", ...defaultFontFamily],
		},
	},
	variants: {},
	plugins: [],
};
