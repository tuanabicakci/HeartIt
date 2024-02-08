import { useRouter } from "next/router";
import { ImPacman } from "react-icons/im";

const SidebarLogo = () => {
  const router = useRouter()
  return(
      <div onClick={()=> router.push('/')}
          className={"rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-amber-600 cursor-pointer transition"}>
          <ImPacman size={28} color={"white"} />
      </div>
  )
}

export default SidebarLogo;