import NewsLetter from "./_components/newsletter"
import MainFooter from "./_components/mainFooter"
import Bottom from "./_components/bottom"

const Footer = () =>{
    return <div className="bg-[#F3F4F6]">
        <NewsLetter />
        <MainFooter />
        <Bottom />
    </div>
}

export default Footer