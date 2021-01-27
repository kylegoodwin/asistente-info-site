import styled from 'styled-components';
import SuperTitle from './SuperTitle';
import Colors from '../utility/Colors';


const ValueProp = () => {


    return(<Container id="solution">
        <div>
        <SuperTitle>Our Solution</SuperTitle>
        <p>
        The Treatment Companion system allows trained coordinators to provide regular support to patients and ultimately aims to <span>increase rates of treatment success.</span>
        </p>
        </div>
    </Container>)

}

const Container = styled.section`
background-color: #F2F5FA;
padding: 3em 0 3em 0;
display: flex;
align-items: center;
justify-content: center;


div{
    width: 80%;
}

p{
    font-size: 2em;
    
}

span{
    color: ${Colors.textBlue};
}

@media only screen and (max-width: 600px) {
  p{
      font-size: 1.25em;
  }
}


`
export default ValueProp;