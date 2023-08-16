
import "./gallerys.scss";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

function Gallery({ images }) {

    return (
        <section className='gallery_section'>
            <div className="container">

                <h2 className="lugrissimo with_lines">My gallery</h2>
                <p className="gallery_section_text">Photos taked on my IPhone</p>
              
                     <div className="gallery_content">
                        <ImageGallery
                            items={images}
                            startIndex={0}
                        />
                    </div>
                
            </div>
        </section>
    )
}

export default Gallery;