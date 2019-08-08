import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class Carousels extends Component {
    render(){
        return (
            <Carousel autoPlay showThumbs={false} infiniteLoop={true} centerMode={true} axis="horizontal" className="full-width-div" style={{marginLeft: '-25px', marginRight: '-25px'}}>
                <div>
                    <a href="/productsgridview">
                    <h1 style={{color: 'white'}}>uang kuno 1</h1>
                    {/* <img src="https://cdn.neow.in/news/images/uploaded/2018/09/1536774109_screenshot_(25).jpg" */}
                    <img src="https://res.cloudinary.com/hihi/image/upload/v1556776506/IMG_20190205_230054_vh2utu.jpg"
                        alt="Adidas-Yeezy" width={500} height={300}
                        className="img-fluid" />
                    </a>
                </div>
                <div>
                    <a href="/productsgridview">
                    <h1 style={{color: 'white'}}>uang kuno 2</h1>
                    {/* <img src="https://i.ytimg.com/vi/naIaW4pk_-o/maxresdefault.jpg"  */}
                    <img src="https://res.cloudinary.com/hihi/image/upload/v1556776506/IMG_20190205_230019_my7szv.jpg"
                        alt="adidas-nmd-x-bape" width={'500px'} height={'300px'} className="img-responsive" />
                    </a>
                </div>
                <a href="/productsgridview">
                <div>
                    <h1 style={{color: 'white'}}>uang kuno 3</h1>
                    {/* <img src="https://assets.pcmag.com/media/images/527386-apple-ipad-pro.jpg?width=810&height=456" */}
                     <img src="https://res.cloudinary.com/hihi/image/upload/v1556776508/IMG_20190205_230300_hqhe8d.jpg"
                        alt="air-jordan-one" width={500} height={300} className="img-responsive" />
                </div>
                </a>
            </Carousel>
           
        );
    }
}

export default Carousels;
