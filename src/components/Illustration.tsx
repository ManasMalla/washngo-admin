export default function Illustration() {
  return (
    <div className="relative md:px-16">
      <div className="flex justify-center items-center">
        <div className="h-96 w-[60%] flex items-end justify-end mt-10 rounded-full overflow-hidden">
          <img
            src="https://noh2o.com/wp-content/uploads/2022/04/Exterior-Auto-Detailing.jpg"
            className="w-full h-full object-cover saturate-0"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-col items-start bg-white/20 border p-6 border-neutral-300/30 rounded-3xl absolute left-[9%] top-6">
        <div className="flex">
          <img
            className="bg-amber-400 w-12 h-12 rounded-full mr-4 object-cover saturate-0"
            src="https://github.com/SampathBalivada.png"
          />
          <div>
            <p className="text-lg font-medium">Sampath Balivada</p>
            <p className="text-sm">i20 owner</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-1 mr-20 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.415 8.409L12 18.896l-7.415 4.11L6 15.597 0 9.75l8.332-1.595L12 .587z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.415 8.409L12 18.896l-7.415 4.11L6 15.597 0 9.75l8.332-1.595L12 .587z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.415 8.409L12 18.896l-7.415 4.11L6 15.597 0 9.75l8.332-1.595L12 .587z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.415 8.409L12 18.896l-7.415 4.11L6 15.597 0 9.75l8.332-1.595L12 .587z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-neutral-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.415 8.409L12 18.896l-7.415 4.11L6 15.597 0 9.75l8.332-1.595L12 .587z" />
          </svg>
        </div>
        <h4 className="mt-2 text-md">
          Good service. Quick and easy.
          <br />
          Love my i20.
        </h4>
      </div>

      <div className="hidden p-6 md:flex flex-col bg-white/10 border border-neutral-300 -top-7 right-[17%] rounded-3xl absolute ">
        <div className="bg-[#9B9AD4] size-12 mb-3 rounded-full overflow-hidden">
          <img src="illustration.png" className="pt-1" />
        </div>
        <h4 className="text-md">Need help?</h4>
        <h4 className="text-sm text-neutral-400">Let me help you</h4>
      </div>
    </div>
  );
}
