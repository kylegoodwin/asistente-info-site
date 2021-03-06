import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

function Header(props) {

  return (
    <>
      <Head>
        <title>Treatment Assistant{props.section && `: ${props.section}`}</title>
        <meta name="description" content={props.description ? props.description : "Title"}></meta>
        <meta name="robots" content="index, follow"></meta>
      </Head>
    </>
  )
}

export function TopMenu(props){
  return (
    <HeaderContainer footer={props.footer}>
      <Logo />
      <Links />
    </HeaderContainer>
  )
}

const Logo = () => {
  return (
    <div className="title">
      <img src="logo.png"></img>
      <span>
        Treatment <br /> Companion
    </span>
    </div>
  )
}

const Links = () => {
  return (
    <div className="links">
      <Link href="#problem"><a>The Problem</a></Link>
      <Link href="#solution"><a>Our System</a></Link>
      <Link href="#contact"><a>Contact Us</a></Link>
    </div>
  )
}

export function Footer() {
return(
  <TopMenu footer/>
)
}

const HeaderContainer = styled.div`

  overflow: hidden;
  width: 100%;
  top:0;
  display: flex;
  align-items: center;
  padding: 1em 2em 0 2em;
  z-index: 1;
  justify-content: space-between;
  flex-direction: ${props => props.footer ? "row-reverse" : "row"};
  background: ${props => props.footer ? 'linear-gradient(149.93deg, rgba(199, 221, 255, 0.3) 4.43%, #D9E8FF 116.68%);' : "none"};
  box-sizing: border-box;

  .title{
    display: flex;
    align-items: center;

    img{
      height: 100px;
    }

    span{
      font-size: 1.5em;
    }
  }

  a{
    text-decoration: none;
    font-weight: bold;
    color: inherit;
    margin: 0 2em 0 2em;
  }

  h1 {
    font-weight: 700;
    font-style: normal;
  }


`



export default Header;
