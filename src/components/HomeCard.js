import React, { Component } from 'react';

class HomeCard extends Component {
    render() {
        return(
            <div>
            <div className="row">
                {/* <div className="col col-md-6 firstBackground" style={{height: '400px'}}></div> */}
                <div className="col col-md-6 bg-light border" style={{height: '400px'}}>
                
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>uang kuno 1</h1>
                    <h5 
                    className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>
                    Oeang Republik Indonesia (ORI) adalah mata uang pertama yang dimiliki Republik Indonesia setelah merdeka. 
                    Pemerintah memandang perlu untuk mengeluarkan uang sendiri.
                    yang tidak hanya berfungsi sebagai alat pembayaran yang sah tapi juga sebagai lambang utama negara merdeka.
                    </h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-primary btn-lg" style={{width: '150px', paddingTop: '10px'}}>Buy Now</button>
                    </a>
                    </center>
                </div>
                <div className="col col-md-6 firstBackground" style={{height: '400px'}}></div>
            </div>

            <div className="row mt-5">
                <div className="col col-md-6 bg-light border">
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>uang kuno 2</h1>
                    <h5 
                    className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>
                    Meski masa peredaran ORI cukup singkat,
                    namun ORI telah diterima di seluruh wilayah Republik Indonesia dan ikut menggelorakan semangat perlawanan terhadap penjajah.Pada Mei 1946 saat suasana di Jakarta genting, 
                    maka Pemerintah RI memutuskan untuk melanjutkan pencetakan ORI di daerah pedalaman seperti di Yogyakarta, Surakarta, dan Malang.
                    </h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-primary btn-lg" style={{width: '150px', paddingTop: '10px'}}>Buy Now</button>
                    </a>
                    </center>
                </div>
                <div className="col col-md-6 firstBackground2" style={{height: '400px'}}>
                </div>
            </div>  
            
            <div className="row mt-5" style={{marginBottom: '100px'}}>
                {/* <div className="col col-md-6 bgthird" style={{height: '400px'}}></div> */}
                <div className="col col-md-6 bg-light border">
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>uang kuno 3</h1>
                    <h5 
                    className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>
                    Namun peredaran ORI tersebut sangat terbatas dan tidak mencakup seluruh wilayah Republik Indonesia.
                    Di Sumatra yang beredar adalah mata uang Jepang. 
                    Pada tanggal 8 April 1947, Gubernur Provinsi Sumatra mengeluarkan uang kertas URIPS-Uang Republik Indonesia Provinsi Sumatra.
                    </h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-primary btn-lg" style={{width: '150px', paddingTop: '10px'}}>Buy Now</button>
                    </a>
                    </center>
                </div>
                <div className="col col-md-6 bgthird" style={{height: '400px'}}></div>
            </div>
            </div>
        )
    }
}

export default HomeCard;