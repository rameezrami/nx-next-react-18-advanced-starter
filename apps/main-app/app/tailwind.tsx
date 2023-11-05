/* eslint-disable @next/next/no-img-element */
export default async function TailWindUISamples() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className="flex flex-col w-full">
      <h4 className="text-2xl ml-5">Tailwind UI Samples</h4>
      <div className="flex flex-row w-full">
        <div className="flex  p-5">
          <div className="pointer-events-auto w-[25.625rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            <div className="flex items-center px-3.5 py-2.5 text-slate-400">
              <svg
                className="mr-2 h-5 w-5 stroke-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search projects...
            </div>
            <div className="border-t border-slate-400/20 px-3.5 py-3">
              <div className="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">
                Recent searches
              </div>
              <div className="flex items-center rounded-md p-1.5">
                <svg
                  className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                Tailwind Labs / Website Redesign
              </div>
              <div className="flex items-center rounded-md p-1.5">
                <svg
                  className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                Laravel LLC / Conference Branding
              </div>
            </div>
            <div className="border-t border-slate-400/20 px-3.5 py-3">
              <div className="flex items-center rounded-md p-1.5">
                <svg
                  className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Add new file...
              </div>
              <div className="flex items-center rounded-md p-1.5">
                <svg
                  className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Add new folder...
              </div>
              <div className="flex items-center rounded-md p-1.5 bg-indigo-600 text-white">
                <svg
                  className="mr-2.5 h-5 w-5 flex-none stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                Add hashtag...
              </div>
              <div className="flex items-center rounded-md p-1.5">
                <svg
                  className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Add label...
              </div>
            </div>
          </div>
        </div>
        <div className="flex  p-5">
          <div className="-mr-[4.625rem] w-[30.25rem] rounded-md bg-white p-4 text-[0.8125rem] leading-6 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            <div className="font-semibold leading-5">Account</div>
            <div className="mt-2 leading-5 text-slate-500">
              Manage how information is displayed on your account.
            </div>
            <div className="mt-4 flex items-center border-t border-slate-400/20 py-3">
              <span className="w-2/5 flex-none">Language</span>
              <span>English</span>
              <span className="pointer-events-auto ml-auto font-medium text-indigo-600 hover:text-indigo-500">
                Update
              </span>
            </div>
            <div className="flex items-center border-t border-slate-400/20 py-3">
              <span className="w-2/5 flex-none">Date format</span>
              <span>DD-MM-YYYY</span>
              <span className="ml-auto flex items-center font-medium text-indigo-600">
                <span className="pointer-events-auto hover:text-indigo-500">
                  Update
                </span>
                <span className="mx-3 h-6 w-px bg-slate-400/20" />
                <span className="pointer-events-auto hover:text-indigo-500">
                  Remove
                </span>
              </span>
            </div>
            <div className="flex items-center border-t border-slate-400/20 py-3">
              <span>Automatic timezone</span>
              <span className="ml-auto">
                <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20">
                  <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4" />
                </div>
              </span>
            </div>
            <div className="flex items-center border-t border-slate-400/20 pt-3">
              <span>Auto-update applicant data</span>
              <span className="ml-auto">
                <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5">
                  <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
