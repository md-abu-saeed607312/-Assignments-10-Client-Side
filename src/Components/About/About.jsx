const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our Career Counseling Platform! Our mission is to empower
            individuals to make informed career decisions by providing
            personalized guidance, resources, and support. Whether re a
            student exploring future opportunities or a professional seeking a
            career change,re here to help you navigate your journey.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a world where everyone has access to the tools and
            insights needed to achieve their career goals. By leveraging
            technology and expert advice, we strive to bridge the gap between
            ambition and achievement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              Personalized career recommendations based on your interests and
              strengths.
            </li>
            <li>
              Expert advice from experienced career counselors and industry
              professionals.
            </li>
            <li>
              Comprehensive resources, including articles, webinars, and
              workshops.
            </li>
            <li>
              Supportive community to share experiences and gain insights.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
           d love to hear from you! If you have any questions, feedback, or
            need assistance, please reach out to us at{" "}
            <a
              href="mailto:support@careercounseling.com"
              className="text-blue-600 hover:underline"
            >
              support@careercounseling.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
