import React from 'react'
import "./Contact.scss"
import email_icon from "/icons/mail_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import call_icon from "/icons/call_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import location_icon from "/icons/location_on_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import arrow_icon from "/icons/arrow_forward_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "298b1ea8-6bcf-44b0-9c2e-55192376b8b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={email_icon} alt="" /></h3>
        <p>At Vamonos Pest, we’re here to keep your home or business pest-free — quickly, discreetly, and professionally.</p>
        <ul>
          <li><img src={email_icon} alt="" />contact@vamonospest.com</li>
          <li><img src={call_icon} alt="" />(505) 123-4567</li>
          <li><img src={location_icon} alt="" />Albuquerque, New Mexico</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name= "phone" placeholder='Enter your mobile number' required />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact