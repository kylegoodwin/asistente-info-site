import styled from 'styled-components'
import Header from '../components/Header'
import Intro from '../components/Intro'

export default function Index() {


    return (
        <Site>
        <Header />
        <Intro />
        </Site>
    )
}


const Site = styled.div`
 font-family: "Roboto Slab", serif;
`


