const AboutUs = () => {
    return (
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to the Full-Stack Development Department of ABES Engineering College!
          </p>
  
          <p className="text-lg mb-6">
            Our mission is to equip students with the necessary skills and knowledge to thrive in the modern world of technology. We focus on hands-on learning in cutting-edge web and mobile technologies, including React.js, Next.js, Node.js, Express, MongoDB, and more. Our department nurtures future software engineers, helping them become industry-ready through real-world projects and collaborative learning.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside mb-6 text-left">
            <li className="mb-2">Experienced faculty with industry knowledge.</li>
            <li className="mb-2">Focus on modern web development technologies (MERN stack, Next.js, etc.).</li>
            <li className="mb-2">Collaborative and practical learning environment with projects and hackathons.</li>
            <li className="mb-2">Strong emphasis on problem-solving and coding skills with platforms like HackerRank and CodeChef.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg mb-6">
            To produce world-class software developers who can contribute to the global tech industry with innovative solutions and cutting-edge technologies. We aim to instill both technical and interpersonal skills in our students, preparing them for the dynamic landscape of software development.
          </p>
  
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg">Feel free to reach out to us for any queries or collaborations. We are here to help and grow together!</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  