import Masonry from 'react-masonry-css'

function Masonrys() {
  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1
  }

  const GalleryImages = Array.from({ length: 60 }).map((_, index) => {
    const randomWidth = 300
    const randomHeight = Math.floor(Math.random() * 200) + 200
    const imgUrl = `https://picsum.photos/${randomWidth}/${randomHeight}?random=${index}`

    return {
      img: imgUrl,
      alt: `Image ${index + 1}`,
    }
  })

  const images = GalleryImages.map((image) => (
    <div key={image.alt} className="group overflow-hidden rounded-lg">
      <img
        src={image.img}
        alt={image.alt}
        className="w-full h-auto rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
      />
    </div>
  ))

  return (
    <div className='overflow-x-hidden'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'>
        {images}
      </Masonry>
    </div>
  )
}

export { Masonrys }
