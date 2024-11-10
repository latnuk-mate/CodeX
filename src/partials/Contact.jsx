
function Contact() {
  return (
    <div className="mt-20 contact-section mb-16">
        <div className="max-w-[1100px] m-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3">
                <div className="col-span-2 primary-bg p-6 contact--form">
                    <form action="/" className="p-3" autoComplete="on">
                        <div className="grid grid-cols-2 gap-5 mb-4">
                            <input type="text" name="name" id="name" className="px-4 py-2" placeholder="First Name"/>
                            <input type="text" name="name" id="name" className="px-4 py-2" placeholder="Last Name"/>
                        </div>
                    <div className="grid grid-cols-1 mb-4">
                    <input type="email" name="email" id="email" className="px-4 py-2 text-gray-500" placeholder="Email Address"/>    
                    </div>
                    <div className="grid grid-cols-1">
                    <textarea name="msg" id="msg" placeholder="Write Message!" rows={5} className="px-4"></textarea>    
                    </div>

                    <button type="submit" className="primary-btn px-6 py-2 capitalize mt-5">send Message</button>
                    </form>
                </div>

                <div className="primary-bg p-3 ps-3 lg:ps-8 pt-8 rounded-md">
                    <h5 className="capitalize text-3xl md:text-2xl lg:text-4xl tracking-wide highlightedText">contact info</h5>
                    <div className="mt-6 mb-4">
                        <h5 className="capitalize text-xl">Address</h5>
                        <p className="text-gray-400 capitalize">12 no street, Lake colony, kolkata</p>
                    </div>

                    <div className="mb-4">
                        <h5 className="capitalize text-xl">Email</h5>
                        <p className="text-gray-400">codexenterprise.example.com</p>
                    </div>

                    <div className="mb-3 md:mb-0">
                        <h5 className="capitalize text-xl">Phone</h5>
                        <p className="text-gray-400">+91 123-435-8987</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Contact;