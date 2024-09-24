const ContactUs = () => {
    return (
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="flex flex-col items-center mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 p-2 border rounded w-full max-w-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 p-2 border rounded w-full max-w-md"
              required
            />
            <textarea
              placeholder="Your Message"
              className="mb-4 p-2 border rounded w-full max-w-md h-32"
              required
            ></textarea>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition">
              Send Message
            </button>
          </form>
  
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg mb-2">Email: <a href="mailto:contact@abes.edu.in" className="text-blue-500">contact@abes.edu.in</a></p>
          <p className="text-lg mb-2">Phone: <a href="tel:+911234567890" className="text-blue-500">+91 12345 67890</a></p>
          <p className="text-lg">Address: ABES Engineering College, Ghaziabad, Uttar Pradesh, India</p>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  