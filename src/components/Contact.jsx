import React from "react";
import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  return (
    <div className="" id="contact">
      <div
        className="min-h-screen flex flex-col flex-wrap text-center justify-items-center pt-22 w-full"
        style={{
          background: "#1b1717",
        }}
      >
        <h4 className="text-yellow-500 font-dosis font-bold text-4xl pt-16">
          Contact..
        </h4>
        <div className="w-full flex md:flex-row sm:flex-col sm:items-center md:items-start">
          <div className="contact_card sm:w-12/12 md:w-6/12 flex flex-row justify-end md:items-start">
          <div
    data-aos="fade-right"
    
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
   
    data-aos-once="false"
    
  >
     <div
              className=" w-64 flex  flex-col items-center  rounded-lg mt-12 h-px shadow-inner"
              style={{
                background: "#393e46",
              }}
            >
              <div className="card_img mt-10">
                <img
                  src="https://scontent.fdac110-1.fna.fbcdn.net/v/t1.6435-9/103612823_999262033824146_1368983833341261221_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=V2eItOgVLGAAX-Li4Ce&_nc_ht=scontent.fdac110-1.fna&oh=ff2fa9dad26c2898b7960d19d1e4c67c&oe=60B06CD2"
                  className="rounded-full w-20 h-20 object-contain"
                  alt=""
                />
              </div>
              <div className="card_middle flex flex-col items-center mt-10 mb-10">
                  <div className="card_middle_content flex items-center">
                    <i class="fas fa-phone-alt text-yellow-500"></i>
                    <p className="ml-2 text-yellow-500 font-semibold font-dosis">+880-  1908734685</p>
                  </div>
                  <div className="card_middle_content flex items-center">
                    <i class="far fa-paper-plane text-yellow-500"></i>
                    <p className="ml-2 text-yellow-500 font-semibold font-dosis">shuvonaim123@gmail.com</p>
                  </div>
              </div>
              <div className="card_footer flex pb-10 flex-row">
                   <div>
                     <a href="https://www.facebook.com/nirob.bikel.967/" target="_blank" rel="noopener noreferrer">
                   <i class="fab fa-facebook-f text-yellow-500 hover:text-yellow-600 transition duration-500  ease-in-out cursor-pointer m-5"></i>
                   </a>
                   </div>
                   <div>
                     <a href="https://github.com/Naim-Ahmed-Shuvo?tab=repositories" target="_blank" rel="noopener noreferrer">
                   <i class="fab fa-github text-yellow-500 hover:text-yellow-600 transition-all .3s ease-in-out cursor-pointer m-5"></i>
                   </a>
                   </div>
                   <div>
                     <a href="https://www.linkedin.com/in/naim-ahmed-aaba311a6/" target="_blank" rel="noopener noreferrer">
                   <i class="fab fa-linkedin-in text-yellow-500 hover:text-yellow-600 transition-all .3s ease-in-out cursor-pointer m-5"></i>
                   </a>
                   </div>
                      
              </div>
            </div>
  </div>
           
          </div>
          <div className="contact_form sm:w-12/12 sm:mt-64 md:mt-2  md:w-8/12">
            <div  data-aos="fade-up"
    
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
   
    data-aos-once="false">
             <div className="mt-12">
             <div className="form_inputs flex flex-col max-w-lg ml-24">
                  <input type="text" placeholder="Name..." className="py-3 px-3 bg-transparent border-gray-700 border rounded-lg outline-none placeholder-yellow-500 focus:border-yellow-500 hover:border-yellow-500 mb-10 transition duration-300 ease-in-out"/>
                  <input type="email" className="py-3 px-3 placeholder-yellow-500  bg-transparent border-gray-700 hover:border-yellow-500 transition duration-300 ease-in-out border rounded-lg outline-none focus:border-yellow-500 mb-10" placeholder="Email..."/>
                  <textarea name="" id="" cols="30" rows="5"  placeholder="Your Message.." className="py-3 px-3 placeholder-yellow-500 bg-transparent border-gray-700 border rounded-lg outline-none hover:border-yellow-500 focus:border-yellow-500 mb-10 transition duration-300 ease-in-out"></textarea>

                  <input type="submit" value="Send"  className="py-3 px-3 bg-gradient-to-r from-green-400 to-blue-500  border-none rounded-lg outline-none focus:border-yellow-500 mb-10 text-yellow-200 cursor-pointer"/>
              </div>
             
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
