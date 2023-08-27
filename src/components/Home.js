import React from "react";
import background from '../components/netfix-bg.jpg';

export default function Home(){
    return(

        <>

          <div className="fluid image-fluid">
             <div className="img-shaodow m-0 p-0">


               <div className="container">
              <div className="row">

                <div className="col-lg-6 col-md-6 col-6 px-5  py-3">
                  <h1 className="netflix mx-5">NETFLIX</h1>
                </div>
                <div className="col-lg-6 col-md-6 col-6 py-3">
                  <div className="singup-body">






                     
    <div class="dropdown" data-bs-theme="dark">
  <button class="btn en dropdown-toggle me-3" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
   <i class="bi bi-globe"></i>English 
  </button>
  <button className="btn btn-danger me-5 py-1 px-3"> Sign In</button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">English</a></li>
    <li><a class="dropdown-item" href="#">Hindi</a></li>
  </ul>
</div>









                  </div>
                </div>

              </div>

                <div className="title-text  px-3 ">
                  <p className="bold-main-title mx-5 me-4 "> Unlimited movies, TV shows and more</p>
                    <p className="sm-txt pt-lg-1 py-1">Watch anywhere. Cancel anytime.</p>
                    <p className="sm-txt">Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                   <div className="row">
                <div className="email-style-body  col-lg-10 col-md-10 col-10 bg-ganger ">
               
                    <div className="ebox ">      
                      
                      
                                    <input type="email" className=" control p-4 me-2 mx-auto" id="exampleFormControlInput1" placeholder="Email address" />
                                    <button className="btn btn1 py-lg-3 py-md-3 px-2 px-5">Get Started  </button>
                                    </div>

                </div>
                
               
                </div>
              </div>


          </div>
         
          </div>
          <div className="p-1 bg"></div>
          
        
        </>
    )


}