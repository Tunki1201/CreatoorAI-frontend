const NavbarComponent = () => {

    return (
        <div className="bg-white flex justify-between w-full p-8">
            <span className="text-[#2E3B5B]" style={{ fontWeight: '600', fontSize: '24px' }} >
                Video Generation
            </span>

            <span className="text-[#2E3B5B] border border-[#E1E8EC] rounded-md p-1 h-[32px] flex items-center justify-center cursor-pointer" >
                Read Docs
            </span>
        </div>
    )
}

export default NavbarComponent
