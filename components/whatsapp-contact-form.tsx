export default function WhatsAppContactForm() {  
  return (
    <section className="relative bg-gray-900 border-t border-transparent dark:border-gray-800">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="h2 font-red-hat-display mb-4 text-gray-100 align-middle">
            Contact Us via WhatsApp
            <span className="inline-block ml-2 align-middle">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="53" height="53" className="align-middle"/>
            </span>
          </h2>
            <p className="text-xl text-gray-400">Click the link below to start a conversation with us on WhatsApp.</p>
          </div>

          <div className="text-center">
            <a 
              className="text-xl font-bold text-teal-500 hover:underline"
              href="https://wa.me/523318923936?text=I'm%20inquiring%20about%20the%20tulum%20land"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start WhatsApp Chat
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
