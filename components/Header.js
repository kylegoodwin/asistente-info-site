import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

function Header(props) {

  return (
    <>
      <Head>
        <title>Title{props.section && `: ${props.section}`}</title>
        <meta name="description" content={props.description ? props.description : "Title"}></meta>
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <HeaderContainer>
        <div className="title">
          <img src="logo.png"></img>
          <span>
            Treatment <br /> Companion
          </span>
        </div>

        <div></div>
        <Link href="/"><a>Overview</a></Link>
        <Link href="/"><a>{"Research & Impact"}</a></Link>
        <Link href="/"><a>About the Project</a></Link>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  top:0;
  display: flex;
  align-items: center;
  padding: 1em 2em 0 2em;
  z-index: 1;


  .title{
    display: flex;
    align-items: center;
    margin-right: auto;

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
