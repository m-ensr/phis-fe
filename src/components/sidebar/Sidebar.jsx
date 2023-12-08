import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>
                What is the Phishing?
            </span>
            <img src = 'https://www.cyberark.com/wp-content/uploads/2023/02/tr-phishing-service-hero.jpg' alt=''></img>
            <a href='https://www.techtarget.com/searchsecurity/definition/phishing'>Phishing is a fraudulent practice in which an attacker masquerades as a reputable entity or person in an email or other form of communication. Attackers commonly use phishing emails to distribute malicious links or attachments that can extract login credentials, account numbers and other personal information from victims.</a>   
        </div>
    </div>
  )
}

export default Sidebar