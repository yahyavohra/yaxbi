const StepNavigation = ({ currentStep, handleStepClick }) => {
    const steps = [
      { number: 1, label: "Job details" },
      { number: 2, label: "Application form" },
    ];
  
    return (
      <div className="col-span-12 md:col-span-12 lg:col-span-3 xl:col-span-2 ">
        <div className="bg-white px-0 lg:px-2 py-0 lg:py-4">
          <div className="flex divide-x lg:divide-none  rounded-sm shadow-sm shadow-black/5 lg:shadow-none ring-1 lg:ring-0 ring-slate-700/10   p-0  divide-slate-400/20 flex-row lg:flex-col justify-center items-center  lg:space-y-4">
            {steps.map((step) => (
              <button
                key={step.number}
                className={`   flex m-[0px]   flex-row w-[100%] items-center justify-center lg:justify-start   h-[40px] lg:h-[30px] focus:outline-none ${
                  currentStep >= step.number ? "text-sky-600" : "text-gray-300"
                }`}
                onClick={() => handleStepClick(step.number)}
              >
                <div
                  className={`h-7 w-7 hidden  text-sm md:flex items-center justify-center rounded-full ${
                    currentStep >= step.number
                      ? "bg-sky-600 text-white"
                      : " text-gray-300  ring ring-[1px] ring-outset ring-gray-300"
                  }`}
                >
                  {currentStep <= step.number ? (
                    `${step.number}`
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="text-sm tex ml-2 font-semibold">{step.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default StepNavigation;
  