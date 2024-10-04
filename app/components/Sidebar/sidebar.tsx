'use client';

import { LogIn, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
// import { SignOut } from '@/shared/utils/auth-helpers/server';
// import { handleRequest } from '@/shared/utils/auth-helpers/client';
// import SidebarMobile from './components/sidebar-mobile';
// import NavItem from '../item';
// import { User } from '@supabase/supabase-js';
// import LoadingSpinner from '@/shared/components/loading-spinner';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { SIDE_BAR_MENU } from './const';
import NavItem from './item';
import Image from 'next/image';
import FoldedImage from '@/public/logo/1.svg'
import UnFoldedImage from '@/public/logo/Creator.svg'
import CleverImage from '@/public/icon/Group 414.png'

const PanelLayoutSidebar = () => {
  const path = usePathname();
  const router = useRouter();
  const [showTitle, setShowTitle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignOut(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    try {
      //   await handleRequest(e, SignOut, router);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* desktop */}

      <div
        className={cn(
          'max-w-[90px] w-full transition-all duration-150 ease-out translate-x-0 max-lg:hidden',
          showTitle && 'max-w-[230px]',
        )}
      />
      <div
        className={cn(
          'flex flex-col fixed flex-shrink-0 max-w-[230px] w-full transition-all ease-out duration-150 translate-x-0 min-h-screen border-r border-gray-900 max-lg:hidden',
          !showTitle && 'max-w-[90px]',
        )}
      >
        <div
          onMouseEnter={() => setShowTitle(true)}
          onMouseLeave={() => setShowTitle(false)}
          className={cn(
            'flex flex-col justify-between p-4 pt-8 w-full h-screen visible',
          )}
        >
          <div className="flex flex-col h-[88%] w-[90%] items-center">
            {
              showTitle ?
                <Image src={UnFoldedImage} alt='image' width={30} height={30} className='flex items-center justify-center' />
                :
                <Image src={FoldedImage} alt='image' width={30} height={30} className='flex items-center justify-center' />
            }
            {/* menu */}
            <div className="flex-grow mt-12">
              {SIDE_BAR_MENU.map((item, index) => {
                // const isSubMenuActive = item.items?.some(
                //   (subItem) => subItem.link === path,
                // );
                return (
                  <div key={index}>
                    <NavItem
                      {...item}
                      showTitle={showTitle}
                      isIcon
                      className={cn(
                        'p-2 py-3 my-1 hover:bg-destructive hover:text-[#3e507b] rounded-md',
                        // (isSubMenuActive || item.link === path) &&
                        (item.link === path) &&
                        'bg-primary text-[#3e507b]',
                      )}
                    />
                    {/* sub items */}
                    {/* {isSubMenuActive && showTitle && item?.items?.length && (
                      <div className="flex flex-col gap-2">
                        {item.items?.map((subItem, index: number) => (
                          <NavItem
                            key={index}
                            {...subItem}
                            className={cn(
                              'pl-10  py-1  hover:bg-primary hover:text-white rounded-md',
                              subItem.link === path &&
                              // 'border border-gray-400 dark:text-white',
                              'bg-primary',
                            )}
                            showTitle
                          />
                        ))}
                      </div>
                    )} */}
                  </div>
                );
              })}
            </div>
            <div className="p-2 py-3 hover:bg-destructive hover:text-[#3e507b] rounded-md">
              {/* {
                user ? (
                  <form onSubmit={handleSignOut} className="w-full">
                    <input
                      type="hidden"
                      name="pathName"
                    // value={usePathname()?.toString()}
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-start cursor-pointer w-full"
                    >
                      {isLoading ? (
                        <p className="flex items-center justify-start">
                          {showTitle && (
                            <span className="mr-2">Signing Out...</span>
                          )}{' '}
                          <LoadingSpinner />
                        </p>
                      ) : (
                        <p className="flex items-center justify-start">
                          <LogOut size={24} className="mr-2" />
                          {showTitle && <span>Sign out</span>}
                        </p>
                      )}
                    </button>
                  </form>
                )
                  : */}
              {/* // (
                  //   <Link href="/signin" className="cursor-pointer">
                  //     <button className="flex items-center justify-start  w-full">
                  //       <LogIn size={24} className="mr-2" />
                  //       {showTitle && <span>Log in</span>}
                  //     </button>
                  //   </Link>
                  // )} */}

              <Link href="/signin" className="cursor-pointer">
                <button className="flex items-center justify-start w-full">
                  <Image src={CleverImage} alt='CloneImage' width={35} height={35} />
                  {showTitle && <span className='hover:text-[#3e507b]'>Clever Mind</span>}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      {/* <SidebarMobile /> */}
    </>
  );
};

export default PanelLayoutSidebar;
