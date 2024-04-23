import Notification from "./_components/topNotification"
import TopBar from "./_components/topBar"
import MainHeader from "./_components/mainHeader"

const Header = () =>{
    return <>
        <Notification />
        <TopBar />
        <MainHeader />
            <p>Header</p>
        </>
}

export default Header