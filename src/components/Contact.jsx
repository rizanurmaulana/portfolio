import { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          swal({
            title: "Good job!",
            text: "Thanks for submitting the form!",
            icon: "success",
          });
        },
        () => {
          swal({
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            icon: "error",
          });
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="#contact"
      className="flex flex-col items-center px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44 py-28 gap-10 transition-300"
    >
      <div className="flex flex-col items-center">
        <p className="font-medium mb-3 text-sm text-sky-600">Contact</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Have a project idea in mind. <br />
          Get in touch and let's chat!
        </h2>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-2">
            <div className="flex gap-3">
              <input
                type="text"
                name="user_name"
                className="block w-1/2 rounded-md border p-4 text-gray-800 text-sm font-light"
                placeholder="Full Name"
              />
              <input
                type="text"
                name="user_email"
                className="block w-1/2 rounded-md border p-4 text-gray-800 text-sm font-light"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="subject"
              className="block w-full rounded-md border p-4 text-gray-800 text-sm font-light"
              placeholder="Subject"
            />
          </div>
          <div className="mb-5">
            <textarea
              rows={5}
              name="message"
              id="message"
              className="block w-full rounded-md border p-4 text-gray-800 placeholder:text-gray-400 resize-none text-sm font-light"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex items-center btn btn-primary">
            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer"
            />
            <FaArrowRight />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
