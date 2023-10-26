import './App.css';
import {BsSearch} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import {MdKeyboardVoice} from "react-icons/md"
import {CgMenuGridO} from "react-icons/cg"
import {AiOutlineUser} from "react-icons/ai"

function App() {
  const items = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"]
  return (
    <div className="App">
      <div className='top-section'>
        <a href='' target='_blank'>Gmail</a>
        <a href='' target='_blank'>Images</a>
        <CgMenuGridO className='top-section-icon'/>
        <AiOutlineUser className='top-section-icon'/>
      </div>
      <div className='content-wrapper'>
        <h1 className='page-tile'>Google</h1>
        <div className='search-con'>
          <BsSearch className='search-bar-icon'/>
          <input type='text' placeholder='Search here'/>
          <div>
          <MdKeyboardVoice className='search-bar-icon'/>
          </div>
        </div>
        <ul className='items-con'>
          {items.map((eachItem,index)=><li key={index} className='item'>
            <BiLogoGmail className='item-img'/>
            <p>{eachItem}</p>
          </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
