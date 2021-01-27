import Header, { Footer } from '../components/Header'
import Intro from '../components/Intro'
import Problem from '../components/Problem'
import System from '../components/System'
import ValueProp from '../components/ValueProp'
import ContactUs from '../components/Contact'

export default function Index() {


    return (
        <>
            <Header />
            <Intro />
            <Problem />
            <ValueProp />
            <System /> 
            <ContactUs />
            <Footer />
        </>
    )
}


