export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-dark rounded-xl mt-4"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt="Kwame Asante"
            className="w-64 h-64 rounded-full object-cover border-4 border-gray-800"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
          <p className="text-gray-400 mb-6">
            I'm Emmanuel Appiah, a full-stack developer and healthcare
            professional based in Tamale, Ghana. With a B.A. in Industrial Arts
            from KNUST, I transitioned into technology through self-taught
            skills in React, Python, Node.js, and web development, driven by a
            passion for creating impactful digital solutions.{" "}
          </p>
          <p className="text-gray-400 mb-6">
            As a programmer, I'm mostly freelancing. I've worked with over 3
            years of professional experience in building web applications. I
            specialize in creating efficient, scalable, and user-friendly
            digital solutions that solve real-world problems.
          </p>
          <p className="text-gray-400 mb-6">
            My projects, from e-commerce platforms to telemedicine apps, reflect
            my commitment to blending technology and healthcare to solve
            real-world challenges.
          </p>
          <p className="text-gray-400 mb-6">
            When I'm not coding, you can find me mentoring young developers in
            local tech communities, exploring new technologies, or enjoying
            Ghana's beautiful beaches.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
              <span>UI/UX Design</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
              <span>Technical Consulting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
