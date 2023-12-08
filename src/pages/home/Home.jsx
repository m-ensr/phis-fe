import Header from '../../components/header/Header'
import Rods from '../../components/rods/Rods'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
      <Rods/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home