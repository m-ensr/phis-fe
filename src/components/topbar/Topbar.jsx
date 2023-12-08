import './topbar.css'
import { GithubFilled } from '@ant-design/icons';


function Topbar() {
  return (
    <div className='top'>
      
        <div className='topLeft'><GithubFilled className='topIcon'/></div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>LOGOUT</li>
          </ul>
        </div>
        <div className='topRight'></div>
        
    </div>
    
  )
}

export default Topbar