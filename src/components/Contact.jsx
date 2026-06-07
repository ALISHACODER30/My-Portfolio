function Contact() {
  return (
    <section id = "contact" className="bg-black text-white py-32 px-8 md:px-16 lg:px-24">

      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
     <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          Contact{" "}
          <span className="text-cyan-400">
            Me
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Feel free to connect with me for
          opportunities, collaborations, or
          frontend development discussions.
        </p>

        {/* FORM */}
        <form className="mt-12 flex flex-col gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#111] border border-gray-700 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#111] border border-gray-700 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-[#111] border border-gray-700 rounded-xl p-4 outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="button"
            className="tap-solid-btn w-full py-4 rounded-xl"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;