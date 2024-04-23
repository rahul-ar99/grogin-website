import SelectedFilter from "./mainContent-component/SelectedFilter"
import BannerSection from "./mainContent-component/BannerSection"
import SortSection from "./mainContent-component/SortSection"
import ProductsList from "./mainContent-component/ProductsList"


const MainContent = () =>{
    return <div className="w-[inherit]">
        {/* filter selected */}
        <SelectedFilter />
        {/* main content */}
        <BannerSection />
        {/* sort section */}
        <SortSection />
        <ProductsList />
        <p>Main content</p>
    </div>
}

export default MainContent