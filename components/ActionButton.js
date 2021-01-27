import styled from 'styled-components'
import Colors from '../utility/Colors';


const ActionButton = (props) => {


    if(props.href) return  <Link target="_blank" href={props.href}>{props.children}</Link>

    return(<Button onClick={props.onClick}>
        {props.children}
    </Button>)

}

const style = `
border-radius: 20px;
background-color: white;
color: ${Colors.navyBlue};
font-family: inherit;
padding: .5em 1em;
border: 1px solid ${Colors.textBlue};
display: block;
text-decoration: none;

&:visited{
    color:${Colors.navyBlue};
}

`

const Button = styled.button`${style}`;
const Link = styled.a`${style}`;


export default ActionButton;