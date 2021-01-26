import styled from 'styled-components'
import Header, { Footer } from '../components/Header'
import Intro from '../components/Intro'
import Problem from '../components/Problem'
import System from '../components/System'

export default function Index() {


    return (
        <Site>
            <Header />
            <Intro />
            <Problem />
            <System />
            <Footer />
        </Site>
    )
}


const Site = styled.div`
 font-family: "Roboto Slab", serif;
`


