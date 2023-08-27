import React from "react";
import tvi1 from"../components/mobile-081.jpg";
import smImg from"../components/boxshot.png";
export default function Subsection(){
    return(
        <>
        
        
        <div className="container-fluid section-bg">
            <div className="container">
                <div className="row">
                 <div className=" col-md-6  col-lg-6  my-lg-3 my-md-4  pt-lg-0 order-1 order-lg-1  my-4 py-5 order-md-1 p-5 ">
                 <img className="img-fluid mb-4" src={tvi1} alt="loading.." />
                 <div className=" col-8 btn-download ">
                    <div className="small-div  mx-5 px-4">
                        
                    <img className="img-fluid " src={smImg} alt="loading.." />
                    </div>

                    </div>
                       
                    </div>
                    <div className=" col-md-6  col-lg-6 my-lg-3 my-md-4 md-auto  order-2 order-lg-2 order-md-2 my-4 py-2 mb-5">
                  
                       <div className="pt-5 pb-3 mt-lg-3 mt-3 mt-md-4 mt-2 p-3">

                       <h1 className="pt-4 m-3  mx-5 px-4 mt-lg-4 mt-3 mt-md-4 mt-3 p-2 txt-style"> Download your shows to watch offline</h1>               
                        <p className="normal-title-text m-3 mx-5 px-4 ">Save your favourites easily and always have something to watch.</p>

                        </div>               

                
                    </div>
                </div>
            </div>
           </div>
           <div className="p-1 bg"></div>
        </>
    )
}