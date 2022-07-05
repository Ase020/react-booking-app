import './featured.css'

function Featured() {
  return (
    <div className='featured'>

        <div className="featured-item">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/945486.webp?k=34d690e8f4e19d04daa6406eec545846f83df1146353fedd33c3ccf368db48a5&o=" 
                alt="Naivasha" 
                className="featured-img" 
            />
            <div className="featured-titles">
                <h1>Naivasha</h1>
                <h2>123 Properties</h2>
            </div>
        </div>

        <div className="featured-item">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/685406.jpg?k=fb02ffb273110d269bc5603a6c662f36fc5ec76b877f68d5de90c0ffbdd3f475&o=" 
                alt="Nairobi" 
                className="featured-img" 
            />
            <div className="featured-titles">
                <h1>Nairobi</h1>
                <h2>47 Properties</h2>
            </div>
        </div>

        <div className="featured-item">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/685399.jpg?k=4410d3272c0ccbc1dd11f53d70243ad7f59ecd89f23a71eb7a93b89382a288da&o=" 
                alt="Mombasa" 
                className="featured-img" 
            />
            <div className="featured-titles">
                <h1>Mombasa</h1>
                <h2>98 Properties</h2>
            </div>
        </div>

        <div className="featured-item">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/916701.jpg?k=bd9cc1c8b0a786bce8f257b190f212c5178816d709147c4d143283ee2b075d69&o=" 
                alt="Malindi" 
                className="featured-img" 
            />
            <div className="featured-titles">
                <h1>Malindi</h1>
                <h2>50 Properties</h2>
            </div>
        </div>

    </div>
  )
}

export default Featured