import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    const { username, phoneNumber, email, subject, message } = formData;

    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg("All fields are required.");
      return;
    }

    if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email address.");
      return;
    }

    try {
      await emailjs.init("ktFwJX9hbllV7CjBr"); // Replace with your EmailJS user ID

      const templateParams = {
        from_name: username,
        phone_number: phoneNumber,
        user_email: email,
        subject,
        message,
      };

      await emailjs.send(
        "service_2kbckwt",
        "template_njhoj17",
        templateParams
      ); // Replace with your EmailJS service ID and template ID

      setSuccessMsg(
        `Thank you, ${username}! Your message has been sent successfully.`
      );
      setErrMsg("");

      // Reset the form
      setFormData({
        username: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrMsg(
        "An error occurred while sending the message. Please try again later."
      );
    }
  };

  const setUsername = (value) => {
    setFormData({ ...formData, username: value });
  };

  const setPhoneNumber = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const setEmail = (value) => {
    setFormData({ ...formData, email: value });
  };

  const setSubject = (value) => {
    setFormData({ ...formData, subject: value });
  };

  const setMessage = (value) => {
    setFormData({ ...formData, message: value });
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={formData.username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={formData.phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={formData.email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={formData.subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={formData.message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
