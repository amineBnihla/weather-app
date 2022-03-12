module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     container: {
      center: true,
      padding:'2rem'
    },
    colors:{
   primary:"#006273",
   secondary:"#00734B",
   white:"#fff",
   black:"#171717",
   transparent:"#ffffff00",
   lightRed:"#FFDBDB",
   red:"#FF0000",
    },
    fontSize:{
      'caption':['0.75rem',{letterSpacing:'0.4px'}],
      'button':['0.875rem',{
        letterSpacing:'1.25px'
      }],
     sm: ['0.875rem', {
        letterSpacing: '0.25px',
      }],
     base: ['1rem', {
        letterSpacing: '0.5px',
      }],
      md:['1.25rem',{
        letterSpacing:'0.15px'
      }],
      lg:'1.5rem',
      xl:['2.125rem',{
        letterSpacing:'0.25px',
      }],
      '2xl':['3rem',{
        letterSpacing:'0.25px',
      }]
    },
    extend: {},
  },
  plugins: [],
}
