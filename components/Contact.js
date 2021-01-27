import styled from 'styled-components'
import Colors from '../utility/Colors'
import ActionButton from './ActionButton'


const ContactUs = () => {


    return (<Container id="contact">
        <div>
            <h2>Interested in learning more about our research?</h2>
            <span>Want a demonstration of our application?</span>
            <ActionButton href='mailto:treatment.assistant@gmail.com?subject=Interested%20in%20learning%20more%20about%20Treatment%20Assistant'>Contact Us</ActionButton>
        </div>
    </Container>)

}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    background-color: ${Colors.navyBlue};

    color: white;

    span{
        padding: 1em;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }

    button{
        display: block;
        margin: 1em auto;
    }
    h2{
        font-size: 1.5em;
        margin: 0;
    }

`
export default ContactUs;