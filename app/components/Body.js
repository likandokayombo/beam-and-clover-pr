import ProgressBar from "./ProgressBar";
import AButton from "./AButton";
import WhyUs from "./WhyUs";

export default function Body() {
  return (
    <div className="w-full flex flex-col items-center bg-black">
      {/* Gradient line */}
      <div className="w-full flex justify-center px-7 md:px-10 lg:px-12 pt-10">
        <svg
          width="100%"
          height="2"
          viewBox="0 0 1280 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-4xl"
        >
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F48244" stopOpacity="0" />
              <stop offset="50%" stopColor="#F48244" stopOpacity="1" />
              <stop offset="100%" stopColor="#F48244" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1280" height="2" fill="url(#gradientLine)" />
        </svg>
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full flex-col gap-4 flex justify-center px-7 md:px-10 lg:px-12 py-10  md:py-20">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl  font-heading text-center">
            Vehicle Administration made Easy
          </h2>
          <h4 className="self-center text-center text-sm px-0 md:px-20 lg:px-56 text-white ">
            We are in partnership with Government Agencies, we modernize vehicle
            administration through smart digital systems. Our technology cuts
            processing time, eliminates manual errors, and makes services faster
            and more secure for a comfortable experience.
          </h4>
          <div className="flex self-center">
            <AButton href="/get-started" showArrow>
              Learn More
            </AButton>
          </div>
        </div>
        <div className="py-5">
          <div className=" bg-red-600  w-full h-40"></div>
        </div>
      </div>

      <div className="relative md:top-9 lg:top-16 self-start justifty-start  px-4 md:px-7 lg:px-12">
        <div className="  bg-[#F48244]/15  self-start justifty-start border-[#F48244]/30 border-[1.5] rounded-lg px-2 py-1">
          <div className="flex flex-row  gap-1">
            <svg
              width="16"
              height="18"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.87805 4.52957C3.48008 4.80166 2.99882 4.96069 2.48048 4.96069C1.11163 4.96069 0 3.84932 0 2.48048C0 1.11137 1.11163 0 2.48048 0C3.84958 0 4.96121 1.11137 4.96121 2.48048C4.96121 3.07089 4.7544 3.61352 4.40919 4.03942L7.2999 6.92988C7.12207 7.09256 6.95547 7.267 6.8014 7.45266L3.87805 4.52957ZM11.0466 3.81276C10.4254 3.60856 9.97622 3.02311 9.97622 2.33398C9.97622 1.47513 10.6734 0.777907 11.5323 0.777907C12.3912 0.777907 13.0886 1.47513 13.0886 2.33398C13.0886 3.11346 12.5144 3.75975 11.7663 3.87256L11.6195 5.62919C11.3845 5.59263 11.1443 5.57174 10.9001 5.56782L11.0466 3.81276ZM17.4832 5.65922L15.0589 7.75688C14.9186 7.56051 14.7651 7.37406 14.5998 7.1991L17.0124 5.11163C16.9022 4.89802 16.8398 4.65569 16.8398 4.399C16.8398 3.54014 17.5373 2.84293 18.3961 2.84293C19.255 2.84293 19.9522 3.54014 19.9522 4.399C19.9522 5.25786 19.255 5.95508 18.3961 5.95508C18.0551 5.95508 17.7396 5.8454 17.4832 5.65922ZM16.9056 14.9367L15.0307 13.8396C15.1722 13.6454 15.3004 13.4406 15.4143 13.2276L17.2693 14.3131C17.5527 14.0154 17.953 13.8297 18.3961 13.8297C19.255 13.8297 19.9522 14.5269 19.9522 15.3858C19.9522 16.2447 19.255 16.9419 18.3961 16.9419C17.5373 16.9419 16.8398 16.2447 16.8398 15.3858C16.8398 15.2296 16.8628 15.079 16.9056 14.9367ZM11.1738 17.3555C12.1982 17.5276 12.98 18.4193 12.98 19.4923C12.98 20.6883 12.0089 21.6592 10.8129 21.6592C9.61691 21.6592 8.64576 20.6883 8.64576 19.4923C8.64576 18.4193 9.42733 17.5276 10.4517 17.3555V15.978C10.5711 15.9864 10.6915 15.9906 10.8129 15.9906C10.9343 15.9906 11.0547 15.9864 11.1738 15.978V17.3555ZM4.83901 14.6677C4.91813 14.8925 4.96121 15.1341 4.96121 15.3858C4.96121 16.5818 3.99007 17.5527 2.79409 17.5527C1.59812 17.5527 0.626974 16.5818 0.626974 15.3858C0.626974 14.1898 1.59812 13.2189 2.79409 13.2189C3.48008 13.2189 4.09191 13.5383 4.48909 14.0363L6.1538 13.1161C6.26243 13.3323 6.38594 13.5396 6.52251 13.7373L4.83901 14.6677ZM10.8129 6.28906C13.291 6.28906 15.303 8.30081 15.303 10.7787C15.303 13.2568 13.291 15.2686 10.8129 15.2686C8.33476 15.2686 6.32275 13.2568 6.32275 10.7787C6.32275 8.30081 8.33476 6.28906 10.8129 6.28906Z"
                fill="#F48244"
              />
            </svg>

            <p className="text-xs text-white self-center text-center font-normal">
              Our Expertise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
