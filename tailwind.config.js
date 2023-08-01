/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                "DanaRegular": "Dana Regular",
                "DanaMedium": "Dana Medium",
                "DanaBold": "Dana Bold",
                "MorabbaLight": "Morabba Light",
                "MorabbaMedium": "Morabba Medium",
                "MorabbaBold": "Morabba Bold",
            },
            width: {
                "100": "400px"
            },
            colors: {
                "brown": {
                    "100": "#ECE0D1",
                    300: "#DBC1AC",
                    "600": "#967259",
                    "900": "#634832"
                }
            },
            boxShadow: {
                "main": "0px 1px 10px rgba(0, 0, 0, 0.05)",
            },
            borderRadius: {
                "4xl": "2rem"
            },
            letterSpacing: {
                tightest: '-.065em',
            },
            screens:{
              "mld":"998px"
            }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}

