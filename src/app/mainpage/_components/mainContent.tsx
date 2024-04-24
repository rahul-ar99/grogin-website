import SelectedFilter from "./mainContent-component/SelectedFilter"
import BannerSection from "./mainContent-component/BannerSection"
import SortSection from "./mainContent-component/SortSection"
import ProductsList from "./mainContent-component/ProductsList"
import DetailPage from "@/app/detailpage/page"


const MainContent = () =>{
    return <div className="w-[inherit]">
        {/* filter selected */}
        <SelectedFilter />
        {/* main content */}
        <BannerSection />
        {/* sort section */}
        <SortSection />
        <DetailPage />
        {/* <ProductsList /> */}
    </div>
}

export default MainContent