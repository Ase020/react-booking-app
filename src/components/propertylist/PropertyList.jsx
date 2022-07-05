import './propertylist.css'

function PropertyList() {
  return (
    <div className='propertylist'>

        <div className="propertylist-item">
            <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o= " 
            alt="hotels" 
            className="propertylist-img" 
            />
            <div className="propertylist-titles">
                <h1>Hotels</h1>
                <h2>124 hotels</h2>
            </div>
        </div>

        <div className="propertylist-item">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" 
            alt="apartments" 
            className="propertylist-img" 
            />
            <div className="propertylist-titles">
                <h1>Apartments</h1>
                <h2>247 apartments</h2>
            </div>
        </div>

        <div className="propertylist-item">
            <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o= " 
            alt="resorts" 
            className="propertylist-img" 
            />
            <div className="propertylist-titles">
                <h1>Resorts</h1>
                <h2>176 resorts</h2>
            </div>
        </div>

        <div className="propertylist-item">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" 
            alt="villas" 
            className="propertylist-img" 
            />
            <div className="propertylist-titles">
                <h1>Villas</h1>
                <h2>432 villas</h2>
            </div>
        </div>

        <div className="propertylist-item">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" 
            alt="cabins" 
            className="propertylist-img" 
            />
            <div className="propertylist-titles">
                <h1>Cabins</h1>
                <h2>163 cabins</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList