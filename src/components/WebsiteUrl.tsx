import type { Url } from "../types";

const WebsiteUrl = ({ url, setUrl }: Url) => {
  return (
    <div className="px-4 md:px-12 my-8">
      <div className="border border-gray-600 w-full p-6 md:p-12 rounded-md">
        <div className="w-full">
         
          <div className="space-y-1 mb-4 md:mb-6 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold font-poppins">
              Responsive Website Tester
            </p>
            <p className="text-sm md:text-lg text-gray-400">
              Check how your website looks on different screen sizes
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between gap-4 sm:gap-x-8">
            <input
              type="text"
              className="border px-2 font-medium rounded-md border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 flex-1 h-12 sm:h-14 outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteUrl;
