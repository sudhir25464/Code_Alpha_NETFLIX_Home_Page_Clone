import React from "react";

export default function QuestionSection(){
    return(
        <>
        <div className="container-fluid section-bg ">
            <div className="container ">
                <div className="container-body p-2   pt-lg-4 pt-md-4 pt-3 py-lg-4 py-md-4 py-3 pt-5">
                    <h1 className="q-txt">
                    Frequently Asked Questions
                    </h1>
                    <div className="mx-5 pt-3">
                   


                           <div    data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <h2 className="question-row p-4">What is Netfix?</h2>
                    
                            </div>
                            <div className="collapse" id="collapseExample1">
                            <div className="card card-body">
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                    <br/> <br/>
                               You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                            </div>


                            
                           <div    data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                            <h2 className="question-row p-4">How much does Netfix cost?</h2>
                    
                            </div>
                            <div className="collapse" id="collapseExample2">
                            <div className="card card-body">
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.                          
                            </div>
                            </div>

                                                        
                           <div    data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                            <h2 className="question-row p-4">Where can I watch?</h2>
                    
                            </div>
                            <div className="collapse" id="collapseExample3">
                            <div className="card card-body">
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br/><br/>
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.                            </div>
                            </div>

                                                        
                           <div    data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                            <h2 className="question-row p-4">How do I cancel?</h2>
                    
                            </div>
                            <div className="collapse" id="collapseExample4">
                            <div className="card card-body">
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                   </div>
                            </div>



                                                        
                           <div    data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
                            <h2 className="question-row p-4">What can I watch on netflix?</h2>
                    
                            </div>
                            <div className="collapse" id="collapseExample5">
                            <div className="card card-body">
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.                            </div>
                            </div>

                                                        
                           <div    data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6">
                            <h2 className="question-row p-4">Is Netflix good for Kids?</h2>
                    
                            </div>
                            <div className="collapse" id="collapseExample6">
                            <div className="card card-body">
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                <br/><br/>
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.                            </div>
                            </div>


                            </div>




                            <div className="below-email-box pt-3">   

                               <p className="below-txt-ready pt-3">Ready to watch? Enter your email to create or restart your membership.</p>
                      
                      
                             <input type="email" className=" control p-4 me-2 mx-auto" id="exampleFormControlInput1" placeholder="Email address" />
                            <button className="btn btn1 py-lg-3 py-md-3 px-2 px-5">Get Started  </button>
                      </div>


                        </div>
                  
            </div>
        </div>
        <div className="p-1 bg"></div>
        </>
    )
}