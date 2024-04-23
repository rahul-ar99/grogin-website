import Notification from "./_components/topNotification"
import TopBar from "./_components/topBar"
import MainHeader from "./_components/mainHeader"
import BottomHeader from "./_components/bottomHeader"
import PathDescription from "./_components/pathDescription"

const Header = () =>{
    return <>
            <Notification />
            <TopBar />
            <MainHeader />
            <BottomHeader />
            <PathDescription />
        </>
}

export default Header