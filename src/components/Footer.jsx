import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
  Mail,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark dark:bg-gray-200 border-t border-gradient-to-r from-primary to-secondary py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <span className="text-xl font-bold gradient-text">
              Kwame Asante
            </span>
            <p className="text-gray-400 dark:text-gray-600 text-sm mt-2">
              Full-Stack Developer based in Ghana, crafting innovative solutions
              for the web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 dark:text-gray-600 hover:text-primary dark:hover:text-blue-600 transition transform hover:scale-105 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-4">
              Stay Updated
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col space-y-2"
            >
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-darker dark:bg-gray-300 border border-gray-700 dark:border-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-600"
                  required
                  disabled={isSubmitting}
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary dark:bg-blue-600 text-white rounded-r-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition disabled:opacity-50"
                  disabled={isSubmitting}
                  aria-label="Subscribe to newsletter"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              {status && (
                <p
                  className={`text-sm ${
                    status.includes("successfully")
                      ? "text-secondary dark:text-green-600"
                      : "text-red-400 dark:text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[
              {
                icon: Github,
                href: "#",
                color: "hover:text-primary dark:hover:text-blue-600",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "#",
                color: "hover:text-blue-400 dark:hover:text-blue-500",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "#",
                color: "hover:text-blue-500 dark:hover:text-blue-400",
                label: "Twitter",
              },
              {
                icon: Instagram,
                href: "#",
                color: "hover:text-pink-500 dark:hover:text-pink-600",
                label: "Instagram",
              },
            ].map(({ icon: Icon, href, color, label }) => (
              <a
                key={label}
                href={href}
                className={`text-gray-400 ${color} transition transform hover:scale-110`}
                aria-label={`Visit my ${label} profile`}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="text-center text-gray-400 dark:text-gray-600 text-sm">
            <p>© {currentYear} Kwame Asante. All rights reserved.</p>
            <p className="mt-2">
              Built with <Heart className="inline text-red-500 h-4 w-4" /> in
              Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
