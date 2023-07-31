import { useRef } from 'react';
import { AiOutlineArrowRight, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import send from '../../assets/send.svg';
import './Contact.css';
import '../../App.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const res = await emailjs.sendForm('service_n0n6mtb', 'template_f258tsi',form.current, '5Xi2HXKNgsulYRru4');
            console.log(res);
        } catch (err) {
            console.error(err);
        } finally {
            form.current.reset();
        }
    };

    return (
        <div id="contact" className="section contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact_container cont grid items-center justify-center gap-x-12 lg:gap-y-0 gap-y-12 md:gap-y-0 pb-12">
                <div className="contact_content">
                    <h3 className="contact_title text-center font-medium mb-6  ">Talk to me</h3>

                    <div className="contact_info justify-center md:justify-normal grid grid-cols-1 sm:grid-cols-[300px] gap-y-4">
                        <div className="contact_card flex flex-col items-center gap-1 bg-white border border-[#0000001a] p-4 rounded-xl">
                            <AiOutlineMail className='text-[2rem] text-[#333333]' />

                            <h3 className="contact_card-title font-medium text-sm">Email</h3>
                            <span className="contact_card_data block mb-3 text-sm">kingsleyizima@gmail.com</span>

                            <a href="mailto:kingsleyizima@gmail.com.com" rel='noreferrer' target='_blank' className="contact_button group text-[#757575] text-sm inline-flex items-center justify-center gap-x-1">
                                Write me{" "}
                                <AiOutlineArrowRight className='contact_button-icon group-hover:translate-x-1.5 duration-300' />
                            </a>
                        </div>

                        <div className="contact_card flex flex-col items-center gap-1 bg-white border border-[#0000001a] p-4 rounded-xl">
                            <AiOutlineWhatsApp className='text-[2rem] text-[#333333]' />

                            <h3 className="contact_card-title font-medium text-sm">Whatsapp</h3>
                            <span className="contact_card_data block mb-3 text-sm">+2347060412338</span>

                            <a href="http://wa.me/2347060412338" rel='noreferrer' target='_blank' className="contact_button group text-[#757575] text-sm inline-flex items-center justify-center gap-x-1">
                                Write me{" "}
                                <AiOutlineArrowRight className='contact_button-icon group-hover:translate-x-1.5 duration-300' />
                            </a>
                        </div>

                        <div className="contact_card flex flex-col items-center gap-1 bg-white border border-[#0000001a] p-4 rounded-xl">
                            <AiOutlineTwitter className='text-[2rem] text-[#333333]' />

                            <h3 className="contact_card-title font-medium text-sm">Twitter</h3>
                            <span className="contact_card_data block mb-3 text-sm">@IzimaObisike</span>

                            <a href="https://twitter.com/IzimaObisike?t=oZIeCnWiHOFPg9xwEWCEUg&s=09" rel='noreferrer' target='_blank' className="contact_button group text-[#757575] text-sm inline-flex items-center justify-center gap-x-1">
                                Write me{" "}
                                <AiOutlineArrowRight className='contact_button-icon group-hover:translate-x-1.5 duration-300' />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="contact_content">
                    <h3 className="contact_title text-center font-medium mb-6 ">Write me your project</h3>
                
                    <form ref={form} onSubmit={sendEmail} className="contact_form w-full sm:w-[22.5rem] mx-auto ">
                        <div className="conact_form-div relative mb-8 h-16">
                            <label htmlFor="name" className="form-tag absolute -top-3 left-5 text-sm p-1 bg-[#fafafa] z-10">Name</label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                className='form_input absolute top-0 left-0 w-full h-full border-2 border-[#0000004d] bg-transparent text-[#757575] outline-none rounded-xl p-6'
                                placeholder='Insert your name'
                            />
                        </div>
                        
                        <div className="conact_form-div relative mb-8 h-16">
                            <label htmlFor="email" className="form-tag absolute -top-3 left-5 text-sm p-1 bg-[#fafafa] z-10">Mail</label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                className='form_input absolute top-0 left-0 w-full h-full border-2 border-[#0000004d] bg-transparent text-[#757575] outline-none rounded-xl p-6'
                                placeholder='Insert your email'
                            />
                        </div>
                        <div className="conact_form-div relative mb-8 h-44">
                            <label htmlFor="msg" className="form-tag absolute -top-3 left-5 text-sm p-1 bg-[#fafafa] z-10">Message</label>
                            <textarea id="msg" name='message' rows="4" required className='form-input absolute top-0 left-0 w-full h-full border-2 border-[#0000004d] bg-transparent text-[#757575] outline-none rounded-xl p-6' placeholder='Write your message here'></textarea>
                        </div>

                        <button className='button inline-flex items-center gap-x-2'>
                            Send Message
                            <img src={send} alt="" className='w-6 lg:w-auto h-6 lg:h-auto' />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact