import Collection from "./home file/Collection"
import CompanyLogo from "./home file/CompanyLogo"
import CourseC from "./home file/CourseCategories"
import Form from "./home file/Form"
import HomeBanner from "./home file/HomeBanner"
import InfoCard from "./home file/InfoCard"
import Instructor from "./home file/Instructors"
import Logo from "./home file/Logo"
import OurPrograms from "./home file/OurPrograms"
import SearchItems from "./home file/SearchItems"
import Steps from "./home file/Steps"
import Events from "./home file/evnt/Events"
import ThreeD from "./home file/ThreeD"
import Mobile from "./home file/Mobile"

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
            <Instructor></Instructor>
            <CompanyLogo></CompanyLogo>
            <Events></Events>
            <ThreeD></ThreeD>
            <Mobile></Mobile>
        </div>
    )
}

export default Home
