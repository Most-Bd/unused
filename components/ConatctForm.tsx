import { FormEvent, useEffect, useState } from "react";

const ConatctForm = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const checkSubmit = (e: FormEvent) => {
    e.preventDefault();

    let nameInput = (document.getElementById("name") as HTMLInputElement)
      ?.value;
    let emailInput = (document.getElementById("email") as HTMLInputElement)
      ?.value;
    let subjectInput = (document.getElementById("subject") as HTMLInputElement)
      ?.value;
    let messageInput = (
      document.getElementById("message") as HTMLTextAreaElement
    )?.value;

    if (!nameInput) {
      setNameError(true);
    }
    if (!emailInput || (emailInput && !emailInput.includes("@"))) {
      setEmailError(true);
    }
    if (!subjectInput) {
      setSubjectError(true);
    }
    if (!messageInput) {
      setMessageError(true);
    }

    // Checking values without using state (setState does not update instantly to ckeck)
    if (
      nameInput &&
      emailInput &&
      emailInput.includes("@") &&
      subjectInput &&
      messageInput
    ) {
      setSending(true);
      setTimeout(() => {
        setSent(true);
        setSending(false);
        console.log("Sent !!");
      }, 2000);
    }
  };

  useEffect(() => {
    if (sent) {
      setTimeout(() => setSent(false), 2000);
    }
  }, [sent]);

  return (
    <div className="w-full mx-auto px-4 mb-8 md:w-[90%] lg:w-[75%] xl:w-[1280px]">
      <div className="w-full">
        <h1 className="font-serif w-fit px-2 mx-auto relative z-10 bg-[white] font-semibold tracking-wider text-center text-3xl">
          CONTACT US
        </h1>
      </div>
      <div>
        <form
          className="relative -top-4 mx-auto flex flex-col justify-evenly max-w-[1000px] border-2 border-darkGreen rounded-2xl pt-8 pb-4 md:flex-row md:flex-wrap"
          onSubmit={(e) => checkSubmit(e)}
        >
          <div className="flex flex-col w-full px-4 md:w-[45%]">
            <label htmlFor="name" className="my-2 text-lg mx-2 font-bold">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name here"
              className={`border-2 ${
                nameError ? "border-[#ff3333]" : "border-darkGreen"
              } rounded-2xl py-1 pl-4 pr-2 bg-lightGreen/30 text-darkGreen text-lg font-bold placeholder-darkGreen/50`}
              onChange={() => {
                if (nameError) {
                  setNameError(false);
                }
              }}
            />
            <p
              className={`p-2 text-[#ff3333] font-bold ${
                nameError ? "inline" : "hidden"
              }`}
            >
              Please enter your name
            </p>
          </div>
          <div className="flex flex-col w-full px-4 md:w-[45%]">
            <label htmlFor="email" className="my-2 text-lg mx-2 font-bold">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email here"
              className={`border-2 ${
                emailError ? "border-[#ff3333]" : "border-darkGreen"
              } rounded-2xl py-1 pl-4 pr-2 bg-lightGreen/30 text-darkGreen text-lg font-bold placeholder-darkGreen/50`}
              onChange={() => {
                if (emailError) {
                  setEmailError(false);
                }
              }}
            />
            <p
              className={`p-2 text-[#ff3333] font-bold ${
                emailError ? "inline" : "hidden"
              }`}
            >
              Please enter a valid email
            </p>
          </div>
          <div className="flex flex-col mt-2 w-full px-4 md:w-[calc(90%+2rem)]">
            <label htmlFor="email" className="my-2 text-lg mx-2 font-bold">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter your subject here"
              className={`border-2 ${
                subjectError ? "border-[#ff3333]" : "border-darkGreen"
              } rounded-2xl py-1 pl-4 pr-2 bg-lightGreen/30 text-darkGreen text-lg font-bold placeholder-darkGreen/50`}
              onChange={() => {
                if (subjectError) {
                  setSubjectError(false);
                }
              }}
            />
            <p
              className={`p-2 text-[#ff3333] font-bold ${
                subjectError ? "inline" : "hidden"
              }`}
            >
              Please enter your subject
            </p>
          </div>
          <div className="flex flex-col mt-2 w-full px-4 md:w-[calc(90%+2rem)]">
            <label htmlFor="message" className="my-2 text-lg mx-2 font-bold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message here"
              rows={4}
              className={`border-2 ${
                messageError ? "border-[#ff3333]" : "border-darkGreen"
              } rounded-2xl py-1 pl-4 pr-2 bg-lightGreen/30 text-darkGreen text-lg font-bold placeholder-darkGreen/50`}
              onChange={() => {
                if (messageError) {
                  setMessageError(false);
                }
              }}
            />
            <p
              className={`p-2 text-[#ff3333] font-bold ${
                messageError ? "inline" : "hidden"
              }`}
            >
              Please enter a valid message
            </p>
          </div>
          <button
            type="submit"
            className="py-3 px-8 text-xl font-bold bg-lightGreen/30 tracking-wider border-2 border-darkGreen w-fit mx-auto mt-4 rounded-full transition-all duration-300"
          >
            <span className={`${sending || sent ? "hidden" : "inline"}`}>
              Send
            </span>
            <span className={`${sending && !sent ? "inline" : "hidden"}`}>
              <svg
                aria-hidden="true"
                className="mr-2 w-8 h-8 text-darkGreen animate-spin fill-lightGreen"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </span>
            <span className={`${!sending && sent ? "inline" : "hidden"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConatctForm;
