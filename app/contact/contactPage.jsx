"use client";

import { useState } from "react";
import Link from "next/link";
import CTASection from "../components/home/CTASection";

export default function ContactPage() {
  const [ formData, setFormData ] = useState( {
    name: "",
    email: "",
    company: "",
    message: "",
  } );
  const [ submitted, setSubmitted ] = useState( false );
  const [ loading, setLoading ] = useState( false );

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setFormData( ( prev ) => ( {
      ...prev,
      [ name ]: value,
    } ) );
  };

  const handleSubmit = async ( e ) => {
    e.preventDefault();
    if ( !formData.name || !formData.email || !formData.message ) return;

    setLoading( true );
    try {
      const response = await fetch( "https://getform.io/f/amdjppjb", {
        method: "POST",
        body: new FormData( e.target ),
      } );

      if ( response.ok ) {
        setSubmitted( true );
        setFormData( { name: "", email: "", company: "", message: "" } );
        setTimeout( () => setSubmitted( false ), 3500 );
      } else {
        alert( "Something went wrong. Please try again." );
      }
    } catch ( error ) {
      console.error( error );
      alert( "Submission failed. Please try again." );
    } finally {
      setLoading( false );
    }
  };

  const contactMethods = [
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      value: "hello@enoves.com",
      href: "mailto:hello@enoves.com",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: "fa-solid fa-map-marker-alt",
      title: "Location",
      value: "Lahore, Pakistan",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col gap-16 py-30 px-0 lg:px-2 md:px-8 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background radial gradient */ }
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(105,97,255,0.12),transparent_55%)] -z-10"></div>

      {/* Hero Section */ }
      <section className="max-w-6xl mx-auto w-full text-center">
        <h1 className="text-2xl md:text-6xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          Let's Build Something Great
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 px-4">
          Have a project in mind? We'd love to hear about it. Get in touch with
          our team and let's discuss how we can help transform your vision into reality.
        </p>
      </section>

      {/* Contact Methods */ }
      <section className="max-w-7xl mx-auto px-5 lg:px-0 lg:mx-15 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { contactMethods.map( ( method, index ) => (
            <a
              key={ index }
              href={ method.href }
              className="group place-items-center p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 bg-purple-800/5"
            >
              <div className="text-4xl mb-4 text-[#695aff]">
                <i className={ method.icon }></i>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{ method.title }</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                { method.value }
              </p>
            </a>
          ) ) }
        </div>
      </section>

      {/* Contact Form & Map Section */ }
      <section className="max-w-7xl px-5 lg:px-0 lg:mx-15 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form - Left Side */ }
          <div className="rounded-3xl p-8 md:p-12 border border-purple-500/30 bg-purple-800/5">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-300 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            { submitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="text-6xl mb-4 text-[#695aff]">
                  <i className="fa-solid fa-check-circle"></i>
                </div>
                <h3 className="text-2xl text-white font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={ handleSubmit } className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={ formData.company }
                    onChange={ handleChange }
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 transition-all"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={ formData.message }
                    onChange={ handleChange }
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={ loading }
                  className="w-full px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-[#6b5cff] to-[#9260ff]"
                >
                  { loading ? "Sending..." : "Send Message" }
                </button>
              </form>
            ) }
          </div>

          {/* Map - Right Side */ }
          <div className="rounded-3xl overflow-hidden border border-purple-500/30 h-full">
            <iframe
              src="https://www.google.com/maps?q=Lahore,+Pakistan&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={ { border: 0 } }
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */ }
      {/* <section className="max-w-4xl mx-auto w-full rounded-3xl p-8 md:p-12 text-center border border-purple-500/30 bg-gradient-to-r from-purple-800/30 to-purple-600/10">
        <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-4">
          Not sure where to start?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with our team. We'll discuss your goals
          and create a custom plan for your project.
        </p>
        <Link href="/services">
          <button className="px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/30 bg-gradient-to-r from-[#6b5cff] to-[#9260ff]">
            Explore Our Services
          </button>
        </Link>
      </section> */}

      <CTASection/>
    </main>
  );
}
