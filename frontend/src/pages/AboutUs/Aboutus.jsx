

// import React from "react";
// import {
//   FaHistory,
//   FaHandshake,
//   FaBoxOpen,
//   FaArrowRight,
// } from "react-icons/fa";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import contactImage from "../../assets/images/loginBarista.jpg";

// const Aboutus = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-b from-black via-brown-900 to-gray-800 min-h-screen">
//         <div className="container mx-auto py-16 px-4">
//           <h2 className="text-5xl font-extrabold text-center mb-12 text-yellow-400">
//             About 2018 Barista
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Section 1: Our Story */}
//             <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-3xl transform hover:scale-105">
//               <div className="flex items-center mb-6">
//                 <FaHistory className="text-4xl mr-4 text-yellow-400 animate-bounce" />
//                 <h3 className="text-3xl font-semibold text-yellow-400">
//                   Our Story
//                 </h3>
//               </div>
//               <p className="text-gray-300 leading-relaxed">
//                 Since 2018, Barista has been crafting exquisite syrups in the
//                 heart of Jordan. Our passion for quality and innovation has made
//                 us a leader in flavoring solutions for beverages and culinary
//                 creations worldwide.
//               </p>
//             </div>
//             <div>
//               <img
//                 src={contactImage}
//                 alt="Our Story"
//                 className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
//               />
//             </div>

//             {/* Section 2: Our Commitment */}
//             <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-3xl transform hover:scale-105">
//               <div className="flex items-center mb-6">
//                 <FaHandshake className="text-4xl mr-4 text-yellow-400 animate-bounce" />
//                 <h3 className="text-3xl font-semibold text-yellow-400">
//                   Our Commitment
//                 </h3>
//               </div>
//               <p className="text-gray-300 leading-relaxed">
//                 We are dedicated to creating the finest syrups using natural
//                 ingredients and time-honored techniques. Our extensive range of
//                 over 120 flavors caters to every taste, from classic to
//                 innovative, ensuring your creations are always amazing.
//               </p>
//             </div>
//             <div>
//               <img
//                 src={contactImage}
//                 alt="Our Commitment"
//                 className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
//               />
//             </div>

//             {/* Section 3: Our Products */}
//             <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-3xl transform hover:scale-105">
//               <div className="flex items-center mb-6">
//                 <FaBoxOpen className="text-4xl mr-4 text-yellow-400 animate-bounce" />
//                 <h3 className="text-3xl font-semibold text-yellow-400">
//                   Our Products
//                 </h3>
//               </div>
//               <p className="text-gray-300 leading-relaxed">
//                 From our classic syrups to our organic and sugar-free varieties,
//                 we offer a wide selection to suit all preferences. Whether
//                 you're crafting cocktails or creating unique hot drinks, 2018
//                 syrups are the perfect addition to elevate your beverages.
//               </p>
//             </div>
//             <div>
//               <img
//                 src={contactImage}
//                 alt="Our Products"
//                 className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//           </div>

//           <div className="mt-20 text-center">
//             <h4 className="text-4xl font-extrabold mb-8 text-yellow-400">
//               Discover the Artistry of Flavor
//             </h4>

//             <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
//               Explore our collection and bring the essence of 2018 to your
//               creations. From Cranberry to Coconut, each syrup is a testament to
//               our commitment to quality and taste.
//             </p>

//             <button className="mt-10 bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105 flex items-center mx-auto shadow-lg">
//               Explore Our Products
//               <FaArrowRight className="ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Aboutus;
import React from "react";
import {
  FaHistory,
  FaHandshake,
  FaBoxOpen,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import contactImage from "../../assets/images/loginBarista.jpg";
import backgroundImage from "../../assets/images/coffeeBeansBackground.jpg"; // صورة حبوب القهوة كخلفية

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-fixed bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // لون أسود مع شفافية لإبراز النص
        }}
      >
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-yellow-400">
            About 2018 Barista
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Section 1: Our Story */}
            <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-3xl transform hover:scale-105">
              <div className="flex items-center mb-6">
                <FaHistory className="text-4xl mr-4 text-yellow-400 animate-bounce" />
                <h3 className="text-3xl font-semibold text-yellow-400">
                  Our Story
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Since 2018, Barista has been crafting exquisite syrups in the
                heart of Jordan. Our passion for quality and innovation has made
                us a leader in flavoring solutions for beverages and culinary
                creations worldwide.
              </p>
            </div>
            <div>
              <img
                src={contactImage}
                alt="Our Story"
                className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Section 2: Our Commitment */}
            <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-3xl transform hover:scale-105">
              <div className="flex items-center mb-6">
                <FaHandshake className="text-4xl mr-4 text-yellow-400 animate-bounce" />
                <h3 className="text-3xl font-semibold text-yellow-400">
                  Our Commitment
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We are dedicated to creating the finest syrups using natural
                ingredients and time-honored techniques. Our extensive range of
                over 120 flavors caters to every taste, from classic to
                innovative, ensuring your creations are always amazing.
              </p>
            </div>
            <div>
              <img
                src={contactImage}
                alt="Our Commitment"
                className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Section 3: Our Products */}
            <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-3xl transform hover:scale-105">
              <div className="flex items-center mb-6">
                <FaBoxOpen className="text-4xl mr-4 text-yellow-400 animate-bounce" />
                <h3 className="text-3xl font-semibold text-yellow-400">
                  Our Products
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                From our classic syrups to our organic and sugar-free varieties,
                we offer a wide selection to suit all preferences. Whether
                you're crafting cocktails or creating unique hot drinks, 2018
                syrups are the perfect addition to elevate your beverages.
              </p>
            </div>
            <div>
              <img
                src={contactImage}
                alt="Our Products"
                className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-20 text-center">
            <h4 className="text-4xl font-extrabold mb-8 text-yellow-400">
              Discover the Artistry of Flavor
            </h4>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              Explore our collection and bring the essence of 2018 to your
              creations. From Cranberry to Coconut, each syrup is a testament to
              our commitment to quality and taste.
            </p>
            <button className="mt-10 bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105 flex items-center mx-auto shadow-lg">
              Explore Our Products
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
