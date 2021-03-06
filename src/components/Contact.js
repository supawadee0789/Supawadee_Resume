import React from "react";
import "./css/ContactStyle.css";
import emailjs from 'emailjs-com';
import { MdEmail, MdCall } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 990 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 991 });
  return isNotMobile ? children : null;
};

class Contact extends React.Component {
  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_lnf2gfh', 'template_grp9yhq', e.target, "user_71isAUGEO1RUkjOS0ZNvY")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Your mail has been send. Thank you for your attention. I'll reply you back as soon as possible.");
  }

  render() {
    return (
      <div
      id="contact">
        <Default>
        <div style={{ display: "flex", flexDirection: "Column", width: "45%" }}>
          <div>
            <h1 className="contact-title">CONTACT ME</h1>
            <p className="contact-subtitle">
              If you are interested in my abilities. Please contact me by any
              contact below or send me an email.
            </p>
          </div>
          <div className="contact-box">
            <p className="address-text">
              <MdEmail size={28} className="contact-icon" />
              {"  "}
              supawadee.khamnuengsithi@gmail.com
              <br />
              <MdCall size={28} className="contact-icon" /> 084 - 5011875
            </p>

            <p className="address-text" style={{ lineHeight: "30px" }}>
              <span style={{ fontWeight: "bold" }}>Resident Address</span>
              <br />
              18 Moo 9 Mueng Nga Mueng Lamphun,
              <br /> Thailand 51000
            </p>
          </div>
        </div>
        <div
          style={{
            width: "35%",
            marginInline: "4%",
            alignSelf: "flex-end",
            marginBottom: "4%",
          }}
        >
          <form
            style={{ textAlign: "start" }}
            onSubmit={this.sendEmail}
    
          >
            <p className="text-input">Name</p>
            <input className="box-input" type="text" name="name" />
            <p className="text-input">Email</p>
            <input className="box-input" type="text" name="email" />
            <p className="text-input">Tel.</p>
            <input
              className="box-input"
              type="text"
              name="phone"
              pattern="[0-9]*"
            />
            <p className="text-input">Messeges</p>
            <textarea
              className="box-input"
              name="message"
              style={{ height: 160, maxHeight: 250, minHeight: 160 }}
            />
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
        </Default>
        <Mobile>
        <div style={{padding:'5%', display:'flex', flexDirection:'column',alignItems:'center'}}>
            <h1 className="contact-title">CONTACT ME</h1>
            <p className="contact-subtitle">
              If you are interested in my abilities. Please contact me by any
              contact below or send me an email.
            </p>
            <div className="contact-box" style={{ width:'80%',paddingInline:32}}>
            <p className="address-text" >
              <MdEmail size={20} className="contact-icon" />supawadee.khamnuengsithi@gmail.com
              <br />
              <MdCall size={20} className="contact-icon" /> 084 - 5011875
            </p>

            <p className="address-text" style={{ lineHeight: "30px" }}>
              <span style={{ fontWeight: "bold" }}>Resident Address</span>
              <br />
              18 Moo 9 Mueng Nga Mueng Lamphun,
              <br /> Thailand 51000
            </p>
          </div>
          
            <form
            style={{ textAlign: "start" ,margin:'5%'}}
            onSubmit={this.sendEmail}
    
          >
            <p className="text-input">Name</p>
            <input className="box-input" type="text" name="name" />
            <p className="text-input">Email</p>
            <input className="box-input" type="text" name="email" />
            <p className="text-input">Tel.</p>
            <input
              className="box-input"
              type="text"
              name="phone"
              pattern="[0-9]*"
            />
            <p className="text-input">Messeges</p>
            <textarea
              className="box-input"
              name="message"
              style={{ height: 160, maxHeight: 250, minHeight: 160 }}
            />
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
          </div>
        </Mobile>
      </div>
    );
  }
}

export default Contact;
