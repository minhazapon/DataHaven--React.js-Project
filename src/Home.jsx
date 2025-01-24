import Collection from "./home file/Collection"
import CourseC from "./home file/CourseCategories"
import Form from "./home file/Form"
import HomeBanner from "./home file/HomeBanner"
import InfoCard from "./home file/InfoCard"
import Logo from "./home file/Logo"
import OurPrograms from "./home file/OurPrograms"
import SearchItems from "./home file/SearchItems"
import Steps from "./home file/Steps"

function Home() {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <InfoCard></InfoCard>
            <Logo></Logo>
            <SearchItems></SearchItems>
            <OurPrograms></OurPrograms>
            <Collection></Collection>
            <CourseC></CourseC>
            <Form></Form>
            <Steps></Steps>
        </div>
    )
}

export default Home
