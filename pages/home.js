import styled, { keyframes } from 'styled-components'
import { useScrollPercentage } from 'react-scroll-percentage'
import Header from '../components/Header'

export default function HomePage() {

    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })

    const inView = (percentage > 0 && percentage < 1)

    return (
            <Home>
                <h1>Edit Me!</h1>
            </Home>
    );
}


const Home = styled.div`

`