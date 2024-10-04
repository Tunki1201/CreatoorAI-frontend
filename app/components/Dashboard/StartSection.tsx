import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <article className="bg-[#5169e4] rounded-lg px-4 sm:px-6 md:px-8 pb-8 border border-[#252629] mt-4 w-full">
      <div className="rounded-b-xl h-8 sm:h-10 border border-t-0 border-[#353E3B]"></div>
      <section className="-mt-3 lg:pt-10 py-8 rounded-lg rounded-t-none border border-t-0 border-[#353e3b] divide-y sm:divide-x sm:divide-y-0 divide-[#353e3b] grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center sm:px-8 lg:px-12 mx-8 sm:mx-0 py-10 sm:py-4 space-y-2">
          <h2 className="font-['Euclid_Circular_A'] text-3xl font-bold bg-gradient-to-tr from-[#5AE88F] from-25% to-[#78CDF9] to-60% bg-clip-text text-transparent">
            1.5M Views
          </h2>
          <p className="text-neutral-dark text-sm">From creators since launch
          </p>
        </div>
        <div className="text-center sm:px-8 lg:px-12 mx-8 sm:mx-0 py-10 sm:py-4 space-y-2">
          <h2 className="font-['Euclid_Circular_A'] text-3xl font-bold bg-gradient-to-tr from-[#5AE88F] from-25% to-[#78CDF9] to-60% bg-clip-text text-transparent">
            1200+ Leads

          </h2>
          <p className="text-neutral-dark text-sm">
            generated from our AI videos
          </p>
        </div>
        <div className="text-center sm:px-8 lg:px-12 mx-8 sm:mx-0 py-10 sm:py-4 space-y-2">
          <h2 className="font-['Euclid_Circular_A'] text-3xl font-bold bg-gradient-to-tr from-[#5AE88F] from-25% to-[#78CDF9] to-60% bg-clip-text text-transparent">
            4500 New followers

          </h2>
          <p className="text-neutral-dark text-sm">
            Across instagram, tiktok, and linkedin

          </p>
        </div>
        <div className="text-center sm:px-8 lg:px-12 mx-8 sm:mx-0 py-10 sm:py-4 space-y-2">
          <h2 className="font-['Euclid_Circular_A'] text-3xl font-bold bg-gradient-to-tr from-[#5AE88F] from-25% to-[#78CDF9] to-60% bg-clip-text text-transparent">
            $5000+ saved

          </h2>
          <p className="text-neutral-dark text-sm">
            Yearly on editors you no longer need
          </p>
        </div>
      </section>
    </article>
  );
};

export default StatsSection;
