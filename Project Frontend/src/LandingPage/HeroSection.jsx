// components/HeroSection.jsx
const HeroSection = () => {
    return (
      <section
        id="home"
        className="bg-cover bg-center h-screen flex items-center justify-center text-center relative z-0"
        style={{ backgroundImage: "url('/src/assets/modern-campus-building-higher-ed.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Connecting Alumni, Inspiring Futures</h1>
          <p className="text-lg md:text-2xl mb-6">Join a thriving community of achievers and access exclusive events, career guidance, and networking opportunities.</p>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-700">Join Now</button>
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded-lg hover:bg-gray-700">Learn More</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  