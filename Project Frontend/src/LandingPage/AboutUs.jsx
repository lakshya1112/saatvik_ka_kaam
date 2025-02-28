// components/AboutUs.jsx
const AboutUs = () => {
    return (
      <section id="about" className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About the Alumni Association</h2>
            <p className="text-gray-700 mb-6">
              Our mission is to connect alumni, celebrate their achievements, and provide opportunities to give back to the community. Join us to relive memories, network, and make an impact.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Learn More</button>
          </div>
          <div className="md:w-1/2">
            <img src="src/assets/istockphoto-639698498-612x612.jpg" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  