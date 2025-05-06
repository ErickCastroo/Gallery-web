import Masonry from 'react-masonry-css'

function Masonrys() {
  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1
  }

  // Genera imágenes random con diferentes alturas
  const GalleryImages = Array.from({ length: 10 }).map((_, index) => {
    const randomWidth = 300 // No importa tanto, ahora lo controlamos con CSS
    const randomHeight = Math.floor(Math.random() * 200) + 200
    const imgUrl = `https://picsum.photos/${randomWidth}/${randomHeight}?random=${index}`

    return {
      img: imgUrl,
      alt: `Image ${index + 1}`,
    }
  })

  const images = GalleryImages.map((image) => (
    <div key={image.alt}>
      <img src={image.img} alt={image.alt} className="w-full h-auto rounded-lg" />
    </div>
  ))

  return (
    <div className="overflow-x-hidden">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {images}
      </Masonry>
    </div>
  )
}

export { Masonrys }
