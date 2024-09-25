import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from "react-icons/bi";
import NavItem from "./NavItem";
import { useState } from "react";

const defaultIconSize = '2.125rem';
const items = [  
{label: 'Home' , icon: <BiHomeAlt size={defaultIconSize} /> ,active: true},
{label: 'Movies', icon: <BiMoviePlay size={defaultIconSize} /> ,active: false},
{label: 'About', icon: <BiInfoCircle size={defaultIconSize} /> ,active: false}

]
const NavItemContainer = () => <>
{
  items.map((item,index) => <NavItem item={item} key={index} />)}
  </>

function index() {
    const [isNavMenuMoblieOpen, setisNavMenuMoblieOpen] = useState(false)
  return ( 
    <nav className="col-span-1 bg-cyan-200 ">
      <div className="flex mx-4 justify-between items-center md:block">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
          phimmoi.net
        </h4>
        <BiMenu className = 'cursor-pointer md:hidden' size ={defaultIconSize} onClick ={()=> setisNavMenuMoblieOpen(!isNavMenuMoblieOpen)}  />
      </div>
      <ul className={`mx-4 my-2${isNavMenuMoblieOpen? '' : ' hidden'} md:block `}>
        <NavItemContainer />
        
      </ul>
    </nav>
  )
}

export default index