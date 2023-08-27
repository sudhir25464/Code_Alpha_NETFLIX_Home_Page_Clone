import React from "react";

export default function Footer(){
    return(
        <>
        
        
        <div className="container-fluid section-bg">
            <div className="container ">
                <div className="row pt-5  ">
                 
            
                <p className="px-4 mx-3 text-light">Questions? Call 000-800-919-1694</p>
                    <div className="col-lg-4 col-md-4 col-6 p-2  pt-3 mt-4 mb-3">
                        
                        <div className="line-section-1 px-4 mx-4">
                            <p><a href="https://help.netflix.com/en/node/412">FAQ</a></p>
                            <p><a href="https://media.netflix.com/en/">Media Centre</a></p>
                            <p><a href="https://devices.netflix.com/en/">Ways to Watch</a></p>
                            <p><a href="https://www.netflix.com/in/">Cookie Preferences</a></p>
                            <p><a href="https://fast.com/">Speed Test</a></p>

                        </div>
                    </div>

                       
                    <div className="col-lg-4 col-md-4 col-6 p-2  pt-3 mt-4 ">
                        <div className="line-section-1 px-4 mx-4">
                            <p><a href="https://help.netflix.com/en/">Help Centre</a></p>
                            <p><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></p>
                            <p><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></p>
                            <p><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></p>
                            <p><a href="https://help.netflix.com/legal/notices">Legal Notices</a></p>

                        </div>
                    </div>
                
                    <div className="col-lg-4 col-md-4 col-6 p-2  pt-3 mt-4 ">
                        <div className="line-section-1 px-4 mx-4">
                            <p><a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a></p>
                            <p><a href="https://jobs.netflix.com/">Jobs</a></p>
                            <p><a href="https://help.netflix.com/legal/privacy">Privacy</a></p>
                            <p><a href="https://help.netflix.com/en/contactus">Conract Us</a></p>
                            <p><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></p>

                        </div>
                    </div>


                
                   




                    <div class="dropdown mx-4 mb-4" data-bs-theme="dark">
                    <button class="btn en dropdown-toggle me-3" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-globe"></i>English 
                    </button>
                    <p className="p-2 py-4 mb-4 text-light">Netflix India</p>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
                        <li><a class="dropdown-item active" href="#">English</a></li>
                        <li><a class="dropdown-item" href="#">Hindi</a></li>
                    </ul>
                    </div>

                </div>

            </div>
           </div>
          
        </>
    )
}