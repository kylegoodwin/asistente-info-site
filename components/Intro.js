import styled from 'styled-components'


export default function ProjectIntro() {
    return (
        <Container>
            <div className="text">
                <h2>Treatment Companion</h2>
                <h1>An adaptable solution helping improve the treatment process for tuberculosis patients worldwide.</h1>
                <div className="trial">Currently Deployed For Clinical Trial In Argentina</div>
            </div>
            <div className="background-gradient" />
            <div className="header-image"></div>
            <ScrollIcon>
                <svg width="63" height="29" viewBox="0 0 63 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L31 25L60 3" stroke-width="5" stroke-linecap="round" />
                </svg>
            </ScrollIcon>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
position: relative;
align-items: flex-start;
justify-content: center;



.text{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 3em;
    margin-bottom: auto;
    margin-top: auto;

    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 2.5em;
        color: #003587;
    }

    h2{
        font-size: 1.5em;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        margin: 0;
    }

    .trial{
        align-self: flex-start;
        font-size: 1em;
        padding: .5em 1em .5em 1em;
        background: white;
        border: 1px solid #C1C1C1;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }

}

.background-gradient{
    background: linear-gradient(149.93deg, rgba(199, 221, 255, 0.3) 4.43%, #D9E8FF 116.68%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    height: 100%;
    width: 100%;
}

.header-image{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 'auto';
    background-image: url("/header.png");
    background-size: contain;
    background-repeat: no-repeat;
}

`

const ScrollIcon = styled.div`
padding: 2em;
width: 100%;
display: flex;
justify-content: center;

svg{
    stroke: #003587;
}
`