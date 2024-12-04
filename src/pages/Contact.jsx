function Contact() {
    return (
      <div className="max-w-2xl mx-4 md:mx-auto my-4">
        <h1 className="text-3xl text-center font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          We'd love to hear from you! Whether you have a question about a product, want to suggest a review, or just want to say hello, feel free to reach out to us using the form below.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    )
  }
  
  export default Contact
  
  