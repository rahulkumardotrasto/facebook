import Image from "next/image"
import { 
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
 } from '@heroicons/react/solid'
import { 
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
 } from '@heroicons/react/outline'
import HeaderIcon from "./HeaderIcon"

function Header() {
    return (
        <div>
                {/* left */}
                <div className="flex items-center">
                    <Image src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" width={40} height={40} layout="fixed"></Image>
                    <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                        <SearchIcon className="h-6 text-gray-600"></SearchIcon>
                        <input 
                        className="flex ml-2 items-center bg-transparent outline-none"
                        type="text" placeholder="Search"/>
                    </div>
                </div>
                {/* center */}
                <div className="flex justify-center flex-grow">
                    <div className="flex space-x-6 md:space-x-2">
                        <HeaderIcon Icon={HomeIcon}/>
                        <HeaderIcon Icon={FlagIcon}/>
                        <HeaderIcon Icon={PlayIcon}/>
                        <HeaderIcon Icon={ShoppingCartIcon}/>
                        <HeaderIcon Icon={UserGroupIcon}/>
                    </div>
                </div>
                {/* right */}
        </div>
    )
}

export default Header
