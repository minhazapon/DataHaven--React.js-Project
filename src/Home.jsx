import Collection from "./home file/Collection"
import HomeBanner from "./home file/HomeBanner"
import InfoCard from "./home file/InfoCard"
import Logo from "./home file/Logo"
import OurPrograms from "./home file/OurPrograms"
import SearchItems from "./home file/SearchItems"

function Home() {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <InfoCard></InfoCard>
            <Logo></Logo>
            <SearchItems></SearchItems>
            <OurPrograms></OurPrograms>
            <Collection></Collection>
        </div>
    )
}

export default Home
