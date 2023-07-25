import "./imgGrid.scss";

function ImageGrid(props) {
    return (
      <div className="grid_img_wrap" style={{
          display:"grid",
          gridTemplateColumns: `repeat(${props.colsCount || 4}, 1fr)`,
          gridTemplateRows: '1fr'
      }}>
        {
            props.images.map(image => (
                <div className='grid_img_item' style={{gridColumn: image.gridWidth, gridRow: image.gridHeight}}>
                    <img src={image.src} alt={image.alt} ></img>
                </div>
            ))
        }  
      </div>  
    )
}

export default ImageGrid;