import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-4"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold gradient-text inline-block">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-dark p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes("successfully")
                    ? "text-secondary"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
        <div className="md:w-1/2 bg-dark p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <p className="text-gray-400 mb-6">
            I'm currently open to new opportunities, freelance projects, or just
            tech discussions. Don't hesitate to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary">
                <MapPin />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-300">Location</h4>
                <p className="text-sm text-gray-400">Tamale, Ghana</p>
                <p className="text-sm text-gray-400">Kumasi, Ghana</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center text-secondary">
                <Mail />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-300">Email</h4>
                <p className="text-sm text-gray-400">
                  <a href="mailto:emk.appiah@gmail.com">emk.appiah@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center text-accent">
                <Phone />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                <p className="text-sm text-gray-400">+233 54 098 5984</p>
                <p className="text-sm text-gray-400">+233 24 963 3336</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center text-purple-400">
                <Clock />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-300">
                  Working Hours
                </h4>
                <p className="text-sm text-gray-400">Mon-Fri: 9AM - 5PM GMT</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-300 mb-4">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/eldray"
                className="h-10 w-10 rounded-full bg-darker border border-gray-700 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition"
              >
                <Github />
              </a>
              <a
                href="linkedin.com/in/emk-appiah"
                className="h-10 w-10 rounded-full bg-darker border border-gray-700 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400 transition"
              >
                <Linkedin />
              </a>
              <a
                href="https://x.com/eL_Dray_GC"
                className="h-10 w-10 rounded-full bg-darker border border-gray-700 flex items-center justify-center text-gray-300 hover:text-blue-500 hover:border-blue-500 transition"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/el_dray.gc/"
                className="h-10 w-10 rounded-full bg-darker border border-gray-700 flex items-center justify-center text-gray-300 hover:text-pink-500 hover:border-pink-500 transition"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-darker border border-gray-700 flex items-center justify-center text-gray-300 hover:text-green-500 hover:border-green-500 transition"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
