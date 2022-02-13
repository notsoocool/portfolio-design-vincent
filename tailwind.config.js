module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('https://cdn.discordapp.com/attachments/941091409509896283/942439755495407646/Hero_image.svg')",
        'half': "url('https://cdn.discordapp.com/attachments/941091409509896283/942514134262612048/Image_4.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
