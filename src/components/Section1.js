import React from "react";
import tvicon1 from"../components/tv.png"; 
export default function Section(){
    return(
        <>
        
        
        <div className="container-fluid section-bg">
            <div className="container">
                <div className="row">
                 <div className=" col-md-6  col-lg-6  my-lg-3 my-md-4  pt-lg-0 order-1 order-lg-1  my-4 py-5 order-md-1  ">
                       <h1 className="pt-5 m-3  mx-5 px-4 mt-lg-5 mt-3 mt-md-4 mt-3 p-2 txt-style"> Enjoy on your TV</h1>               
                        <p className="normal-title-text m-3 mx-5 px-4">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className=" col-md-6  col-lg-6 my-lg-3 my-md-4 md-auto  order-2 order-lg-2 order-md-2 my-4 py-2 mb-4">
                  
                       <div className="pt-5 pb-3 mt-lg-3 mt-3 mt-md-4 mt-2 p-3">
                        <img className="img-fluid" src={tvicon1} alt="loading.." />
                        </div>               

                
                    </div>
                </div>
            </div>
           </div>
           <div className="p-1 bg"></div>
        </>
    )
}