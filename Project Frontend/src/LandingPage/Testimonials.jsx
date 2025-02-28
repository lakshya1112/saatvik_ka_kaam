// components/Testimonials.jsx
const Testimonials = () => {
    const testimonials = [
      {
        name: "John Doe",
        batch: "Batch of 2015",
        designation: "Software Engineer at Google",
        testimonial: "The Alumni Portal helped me reconnect with my peers and expand my professional network.",
      },
      {
        name: "Jane Smith",
        batch: "Batch of 2018",
        designation: "Data Scientist at Amazon",
        testimonial: "I’ve found great career opportunities and mentorship through this platform.",
      },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Hear from Our Alumni</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <p className="italic mb-4">"{item.testimonial}"</p>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">{item.batch}</p>
                <p className="text-gray-600">{item.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default Testimonials;