module.exports = {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                main_color: '#F5CF14',
                secondary_color: '#C2A410',
                logo_bg: '#fae686',

                logoSecondary: '#F7DD5E',
                secondary: '#2F4858',
                marron: '#B2A26D'
            }
        },
    },
    plugins: [],
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ]
}