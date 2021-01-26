const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@700&display=swap'
  link.rel = 'stylesheet'
    
  document.head.appendChild(link)

  const robotoSlab = new FontFaceObserver('Roboto Slab')

  robotoSlab.load().then(() => {
    document.documentElement.classList.add('roboto-slab')
  })
}

export default Fonts