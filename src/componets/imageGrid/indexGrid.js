import "./imgGrid.scss";

function ImageGrid(props) {
    return (
      <div className="grid_img_wrap" style={{
          display:"grid",
          gridTemplateColumns: `repeat(${props.colsCount || 4}, 1fr)`
      }}>
        {
            props.images.map((image, index) => (
                <div key={index}
                 className='grid_img_item'
                  style={{gridColumn: image.gridWidth || '', gridRow: image.gridHeight || ''}}>
                    <img data-id={index} src={image.src} alt={image.alt} ></img>
                </div>
            ))
        }  
      </div>  
    )
}

export default ImageGrid;