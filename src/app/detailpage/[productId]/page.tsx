import Header from "@/components/includes/header/header"
import Footer from "@/components/includes/footer/footer"
import Description from "./_components/Description"
import Related from "./_components/Related"
import Detail from "./_components/Details"


const ProductDetailPage = ({params}:{params:{productId:string}}) =>{
    return <div>
                <Header />
                <div className="wrapper">
                    <p>this is product Detail page {params.productId}</p>
                    <Detail />
                    <Description />
                    <Related />
                </div>

                <Footer />
            </div>
}

export default ProductDetailPage