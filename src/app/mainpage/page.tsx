import Header from "@/components/includes/header/header"
import Footer from "@/components/includes/footer/footer"
import Filter from "./components/filter"
import MainContent from "./components/mainContent"

const Mainpage  = () =>{
    return <div className="w-full">
            <Header />
            <div className="wrapper">
                <div className="w-full flex bg-red-300">
                    <Filter />
                    <MainContent />
                </div>
            </div>
            <Footer />
        </div>
}

export default Mainpage