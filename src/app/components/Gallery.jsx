const images = [
  '/GALLERYIMAGE1.png', '/GALLERYIMAGE2.png', '/GALLERYIMAGE3.png',
  '/GALLERYIMAGE4.png', '/GALLERYIMAGE5.png', '/GALLERYIMAGE6.png'
];

const Gallery = () => (
  <section className="max-w-7xl mx-auto p-6">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Gallery</h2>
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Gallery ${i}`}
          className="w-full h-auto rounded shadow-md break-inside-avoid"
        />
      ))}
    </div>
    
  </section>
);

export default Gallery;
