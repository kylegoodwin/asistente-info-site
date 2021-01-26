import styled from 'styled-components'

export default function TextSection(props) {
    return (
        <Section className={props.className}>
            <h3>{props.subtitle}</h3>
            <h2>{props.title}</h2>
            {props.children}
        </Section>
    )
}

const Section = styled.div`
    h3{
        text-transform: uppercase;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.25em;

letter-spacing: 0.05em;

color: rgba(66, 133, 244, 0.7);

    }
    h2{
        border-left: solid 5px #4285F4;
        padding-left: 1em;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
    }
`