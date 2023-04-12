function App() {
  return (
    <div className="flex min-h-screen  w-full bg-[#ECF2FF] lg:items-center lg:justify-center lg:overflow-hidden">
      {/** blue */}
      <div className="flex h-full w-full flex-col bg-white lg:h-[512px] lg:w-[736px] lg:flex-row lg:rounded-[32px]">
        <div className=" flex h-full w-full flex-col items-center justify-center space-y-6 rounded-b-[32px] bg-gradient-to-t from-[#2F2CE9] to-[#6943FF] pb-10 pt-6  lg:rounded-[32px]">
          <p className=" text-lg font-bold text-[#CAC9FF]">Your Result</p>
          <div className=" flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-t from-transparent to-[#4D21C9] lg:h-[200px] lg:w-[200px] ">
            <div className="flex flex-col items-center justify-center">
              <p className=" text-6xl font-extrabold text-white">76</p>
              <p className=" text-lg font-bold text-[#CAC9FF]"> of 100</p>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center px-14">
            <p className="text-2xl font-bold text-white">Great</p>
            <p className=" text-center text-base font-bold text-[#CAC9FF]">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        {/** white */}
        <div className="h-full w-full space-y-6 px-[30px] py-6 lg:space-y-[28px] lg:p-10">
          <p className=" text-lg font-bold text-[#303B59]">Summary</p>
          <div className=" space-y-3">
            <div className="flex h-14 w-full flex-row items-center justify-between rounded-xl bg-[#fff6f6] p-4">
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#F55"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                  />
                </svg>
                <p className=" text-base font-medium text-[#FF5555] ">
                  Reaction
                </p>
              </div>
              <p className="text-base font-bold text-[#303B59]/50">
                <span className="text-[#303B59]">80</span> / 100
              </p>
            </div>

            <div className="flex h-14 w-full flex-row items-center justify-between rounded-xl bg-[#fffbf3] p-4">
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                  />
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                  />
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                  />
                </svg>
                <p className=" text-base font-medium text-[#FFB21E] ">Memory</p>
              </div>
              <p className="text-base font-bold text-[#303B59]/50">
                <span className="text-[#303B59]">92</span> / 100
              </p>
            </div>
            <div className="flex h-14 w-full flex-row items-center justify-between rounded-xl bg-[#f0fcf9] p-4">
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#00BB8F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                  />
                </svg>
                <p className=" text-base font-medium text-[#00BB8F] ">Verbal</p>
              </div>
              <p className="text-base font-bold text-[#303B59]/50">
                <span className="text-[#303B59]">61</span> / 100
              </p>
            </div>
            <div className="flex h-14 w-full flex-row items-center justify-between rounded-xl bg-[#f3f4fe] p-4">
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                  />
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                  />
                </svg>
                <p className=" text-base font-medium text-[#1125D6] ">Visual</p>
              </div>
              <p className="text-base font-bold text-[#303B59]/50">
                <span className="text-[#303B59]">72</span> / 100
              </p>
            </div>
          </div>
          <div className="h-full w-full">
            <button className="h-[56px] w-[315px] rounded-[128px] bg-[#303B59] hover:bg-gradient-to-t hover:from-[#2F2CE9] hover:to-[#6943FF]">
              <p className=" text-lg font-bold text-white">Continue</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
