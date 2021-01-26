import styled from 'styled-components'


const Statistic = (props) => {

    return(<Container>
        <span className="statistic">{props.stat}</span>
        <span className="subtitle">{props.subtitle}</span>
    </Container>)

}

const Container = styled.div`
display: flex;
flex-direction: column;

.statistic{
    font-size: 64px;
    color: rgba(66, 133, 244, 0.7);

}

.subtitle{
    font-size: 1.2em;
    color: rgba(0, 0, 0, 0.7);
    font-family: Roboto, sans-serif;
    font-weight: 300;
    max-width: 300px;
}

`

export default Statistic;