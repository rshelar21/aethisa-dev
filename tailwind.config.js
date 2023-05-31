module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
        colors: {
          dots : {
            dark : 'rgba(255, 255, 255, 0.31)',
          },
          headline : {
            black : "#020100",
            green : "#08A593",
            light  : "#667085"
          }
        },
        fontSize : {
          domain : {
            'xxs' : '12px',
          }
        },
        boxShadow : {
          button : '0px 20px 32px rgba(2, 1, 0, 0.42)'
        },
      },
  },
  plugins: [],
}
