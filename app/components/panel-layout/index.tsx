// import { createClient } from '@/shared/utils/supabase/server';
import PanelLayoutSidebar from '@/app/components/Sidebar/sidebar';

const PanelLayout = async ({ children }: { children: React.ReactNode }) => {
//   const supabase = createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
  return (
    <>
      {/* <PlatformNavBar user={user} /> */}
      <div className="flex flex-row w-screen h-screen min-h-screen max-md:flex-col">
        {/* sidebar */}
        <PanelLayoutSidebar />
        {/* content */}
        {/* <Navbar /> */}
        <div className="flex container lg:max-w-full h-full mx-auto max-lg:z-10 bg-[#f7f7f7]">
          {children}
        </div>
      </div>
      {/* <BasicOnboardingModal /> */}
    </>
  );
};

export default PanelLayout;
