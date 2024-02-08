import {useRouter} from "next/router";
import {FaFeather} from "react-icons/fa";

const SidebarPostButton = () => {
    const router = useRouter();
  return(
      <div onClick={()=> router.push('/')}>
          <div
          className={'mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-400 hover:bg-opacity-80 transition cursor-pointer'}>
              <FaFeather size={24} color={'white'}/>
          </div>
          <div className={"mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-400 hover:bg-opacity-90 cursor-pointer transition"}>
            <p className={"hidden lg:block text-center font-semibold text-sky-50 text-[20px]"}>POST</p>
          </div>
      </div>
  )
}

export default SidebarPostButton;
