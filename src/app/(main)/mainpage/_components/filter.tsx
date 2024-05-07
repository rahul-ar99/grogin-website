import ProductStatus from "./filter-component/ProductStatus"
import BrandFilter from "./filter-component/BrandFilter"
import ColorFilter from "./filter-component/ColorFilter"
import CatogaryFilter from "./filter-component/CatogaryFilter"
import PriceFilter from "./filter-component/PriceFilter"

const Filter = () =>{
    return <div className="w-min">
            <PriceFilter />
            <CatogaryFilter />
            <ColorFilter />
            <BrandFilter />
            <ProductStatus />
        </div>
}

export default Filter   