import styled from 'styled-components'
import Colors from '../utility/Colors'

const SuperTitle = (props) => {


    return(<Container>
        {props.children}
    </Container>)

}

const Container = styled.div`
        text-transform: uppercase;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.25em;
        letter-spacing: 0.05em;
        color: ${Colors.textBlue};

    `
export default SuperTitle;