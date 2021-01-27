import styled from 'styled-components'
import SuperTitle from './SuperTitle'

export default function TextSection(props) {
    return (
        <Section className={props.className}>
            <SuperTitle>{props.subtitle}</SuperTitle>
            <h2>{props.title}</h2>
            {props.children}
        </Section>
    )
}

const Section = styled.div`

    h2{
        border-left: solid 5px #4285F4;
        padding-left: 1em;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
    }
`