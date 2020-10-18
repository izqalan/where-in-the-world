module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
          ternary: 'var(--bg-background-ternary)',
        },

        lightBg: "#FAFAFA",
        lightPrimary: "#FFFFFF",
        darkBg: "#212E37",
        darkPrimary: "#2B3743"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
        xxl: "1900px"
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem"
      },
      width: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66667%",
        "5/6": "83.33333%",
        "3/10": "30%",
        "1/20": "5%",
        "3/20": "15%",
        "2/20": "10%",
        "4/20": "20%",
        "5/20": "25%",
        "13/20": "65%",
        "17/20": "85%",
        30: "7.5rem",
        50: "12.5rem",
        126: "30rem",
        full: "100%",
        screen: "100vw"
      },
      height: {
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.33333%",
        "2/3": "66.66667%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66667%",
        "5/6": "83.33333%",
        "1/12": "8.333333%",
        "1/2-vh": "50vh",
        "1/5-vh": "20vh",
        "2/5-vh": "40vh",
        "3/5-vh": "60vh",
        "3/4-vh": "75vh",
        30: "7.5rem",
        100: "26rem",
        130: "34rem",
        136: "40rem",
        "65-vh": "65vh",
        "70-vh": "70vh",
        full: "100%",
        screen: "100vh"
      },
      minHeight: {
        "1/5-vh": "20vh",
        "2/5-vh": "40vh",
        "1/2-vh": "50vh",
        "3/5-vh": "60vh",
        "3/4-vh": "75vh",
        "20-vh": "20vh",
        "30-vh": "30vh",
        "70-vh": "70vh",
        80: "80%",
        90: "90%",
        full: "100%",
        screen: "100vh"
      },
      maxHeight: {
        "1/5-vh": "20vh",
        "2/5-vh": "40vh",
        "1/2-vh": "50vh",
        "3/5-vh": "60vh",
        "3/4-vh": "75vh",
        "20-vh": "20vh",
        "30-vh": "30vh",
        "70-vh": "70vh",
        80: "80%",
        90: "90%",
        full: "100%",
        screen: "100vh"
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
      }
    }
  },
  variants: {}
}
