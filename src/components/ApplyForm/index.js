import React, { useState, Fragment } from "react";
import { Dialog, Transition, Switch } from "@headlessui/react";
import { useRouter } from "next/navigation";
const ApplyForm = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [submitRequest, setSubmitRequest] = useState(false);
  const [errors, setErrors] = useState({});
  const closeModal = () => {
    setIsOpen(false);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resume: null,
    photo: null,
    about: "",
    resumeName: "",
    photoName: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume" || name === "photo") {
      setFormData({
        ...formData,
        [name]: files[0],
        [`${name}Name`]: files[0] ? files[0].name : "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsOpen(true);
    }
  };
  const handleSubmitRequest = () => {
    // send Form  detail
    console.log(formData);
    setSubmitRequest(true);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.about.trim()) newErrors.about = "Some text is required";
    if (!formData.resume) newErrors.resume = "Attachment is required";
    if (!formData.photo) newErrors.photo = "Attachment is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div className="col-span-12 lg:col-span-9 xl:col-span-9 ">
        <div className="bg-white p-4 ring ring-[1px]  ring-outset ring-gray-100  rounded-sm  p-2 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className=" text-2xl font-semibold my-2 text-gray-900">
                  Application Form
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  We do not seem to know about you. If you wish to join us,
                  please tell us know about you:
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        id="firstName"
                        autoComplete="given-name"
                        className="pl-3 h-[45px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                      <div className="text-sm text-red-600 mt-2">
                        {errors.firstName}
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        autoComplete="family-name"
                        className="pl-3 h-[45px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                      <div className="text-sm text-red-600 mt-2">
                        {errors.lastName}
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="pl-3 h-[45px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                      <div className="text-sm text-red-600 mt-2">
                        {errors.email}
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 987-6543"
                        className="pl-3 h-[45px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                      <div className="text-sm text-red-600 mt-2">
                        {errors.phoneNumber}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Upload Your resume
                  </label>
                  <div className="text-sm  font-medium text-gray-600  ">
                    {formData.resumeName && (
                      <>
                        File:{" "}
                        <span className=" font-normal text-italic">
                          {formData.resumeName}
                        </span>
                      </>
                    )}
                    <div className="text-sm text-red-600 ">{errors.resume}</div>
                  </div>

                  <div className="mt-2 flex justify-center  rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-auto mr-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>

                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="resume"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 hover:text-gray-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="resume"
                            onChange={handleChange}
                            name="resume"
                            type="file"
                            className="sr-only"
                            accept=".pdf,.doc,.docx"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PDF, DOC up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Upload photo
                  </label>
                  <div className="text-sm  font-medium text-gray-600  ">
                    {formData.photoName && (
                      <>
                        File:{" "}
                        <span className=" font-normal text-italic">
                          {formData.photoName}
                        </span>
                      </>
                    )}
                    <div className="text-sm text-red-600">{errors.photo}</div>
                  </div>

                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-auto mr-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>

                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="photo"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 hover:text-gray-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="photo"
                            onChange={handleChange}
                            name="photo"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tell us more about yourself
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      value={formData.about}
                      onChange={handleChange}
                      className="block w-full  rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="text-sm text-red-600 font-medium mt-2">
                    {errors.about}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                className=" items-center inline-flex justify-center rounded-sm text-sm h-[40px]   bg-sky-100 text-sky-700 hover:bg-sky-200 px-[20px] "
                type="submit"
              >
                <p className="text-md mr-2 font-semibold ">Submit</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </form>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full lg:max-w-2xl sm:max-w-[90%] transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                      {!submitRequest ? (
                        <>
                          <Dialog.Title
                            as="h3"
                            className="text-2xl mb-5 font-medium leading-6 text-gray-900"
                          >
                            Submit Your Application Request
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500 mb-[20px]">
                              By proceeding, you are granting ENATA permission
                              to process your personal data in order to carry
                              out background verification checks.
                            </p>
                            <p className="text-sm text-gray-500 mb-[20px]">
                              For full details of how we process your personal
                              data, as well as an explanation of your rights,
                              please see our Data Protection Policy.
                            </p>
                            <p className="text-sm text-gray-500 mb-[20px]">
                              Please be aware that we may use the services of
                              third parties and/or contact identified third
                              parties (such as academic institutions and former
                              employers) to verify the accuracy of any data
                              and/or documents that you provide to us.
                            </p>
                            <p className="text-sm text-gray-500 mb-[20px]">
                              The results will be held on file in accordance
                              with our data retention policy.
                            </p>
                          </div>
                          <div className="py-2 flex items-center  ">
                            <Switch
                              checked={enabled}
                              onChange={setEnabled}
                              className={`${
                                enabled ? "bg-gray-700" : "bg-gray-400"
                              }
                                    relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/41`}
                            >
                              <span className="sr-only">
                                I acknowledge and agree of the conditions stated
                                above
                              </span>
                              <span
                                aria-hidden="true"
                                className={`${
                                  enabled ? "translate-x-5" : "translate-x-0"
                                }
                                        pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                            <span
                              onClick={() => setEnabled(!enabled)}
                              className=" cursor-pointer text-sm text-gray-500 ml-[10px] font-semibold"
                            >
                              I acknowledge and agree of the conditions stated
                              above
                            </span>
                          </div>

                          <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                              type="button"
                              onClick={closeModal}
                              className="text-sm font-semibold leading-6 text-gray-900"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleSubmitRequest}
                              disabled={!enabled}
                              className={`rounded-md  px-6 py-3 text-sm font-semibold  shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
                                enabled
                                  ? " text-white bg-gray-700 cursor"
                                  : " text-gray-500 bg-gray-400 cursor-not-allowed"
                              } `}
                            >
                              Submit Application Request
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <Dialog.Title
                            as="h3"
                            className="text-2xl mb-5 flex  items-center justify-center font-medium text-center leading-6 text-gray-500"
                          >
                            <div className="text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-20 h-20 mb-5 ml-auto mr-auto"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                              Good Luck!
                            </div>
                          </Dialog.Title>
                          <p className="text-sm text-gray-500 mb-[20px] text-center">
                            Your Application Request successfully Submited
                          </p>
                        </>
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
};
export default ApplyForm;
