/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/index.js",
    "./src/App.js",
    "./src/components/Navbar.js",
    "./src/components/Intro.js",
    "./src/components/Features-Description.js",
    "./src/components/Features-Body.js",
    "./src/components/Pricing-Tiers.js",
    "./src/components/CallToAction.js",
    "./src/components/MailingList.js",
    "./src/components/DownloadNow.js",
    "./src/components/About-Body.js",
    "./src/components/Pricing-Body.js",
    "./src/components/Go-Back-To-Top.js",
    "./src/components/Footer.js",
    "./src/pages/About.js",
    "./src/pages/Home.js",
    "./src/pages/Features.js",
    "./src/pages/Pricing.js",
    "./src/pages/BlogPost.js",
    "./src/pages/Blog-List.js"
  ],
  theme: {
    colors: {
      'blue': '#8FCEFF',
      'orange': '#F5B400',
      'white': '#FFFFFF',
      'gray': '#474747',
      'black': '#000000',
      'brown': '#9E5408',
      'green': '#42C202',
      'red': '#C90F02',
      'purple': '#A400CC'
    },
    fontFamily: {
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    extend: {
      flex: {
        '1': '0 1 auto'
      }
    },
  },
    plugins: []
  }