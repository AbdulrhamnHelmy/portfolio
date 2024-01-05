import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../Animation/done.json";
import contactAnimation from "../../Animation/Animation.json";
import { useState } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("xpzvzjze");
  const [input, setValue] = useState("");
  const [msg, setMsg] = useState("");
  const handleClick = (e) => {
    setMsg("");
    setValue("");
  };
  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <i className="icon-envelope"></i>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get Notified When I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              value={input}
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email Address..."
              onChange={(e) => setValue(e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="massage">Your Massage:</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
              name="message"
              id="massage"
              placeholder="Massage..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>


            
              <button
                type="submit"
                disabled={state.submitting}
                className="submit"
              >
                {state.submitting ? "Sumitting..." : "Submit"}
              </button>
            

           
              <button
                // style={{  marginLeft: "1rem" }}
                className="submitt"
                onClick={handleClick}
              >
                Reset
              </button>
          
       

          {state.succeeded && (
            <p className="massage flex">
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your massage has been sent successfully.{" "}
            </p>
          )}
        </form>
        <div className="animatoin">
          {" "}
          <Lottie
            className="contactanimation"
            style={{ height: 300 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
function setValue(arg0) {
  throw new Error("Function not implemented.");
}
