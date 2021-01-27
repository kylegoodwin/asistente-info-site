import styled from 'styled-components'
import Colors from '../utility/Colors'


const System = () => {


    return (<Container>
        <h2>System At A Glance</h2>
        <DescriptionContainer>
            <img className="person left" src="/system/patient.svg" />
            <div className="system-section label">
                <span>Patient</span>
            </div>
            <Patient />
            <Supporter />
            <div className="system-section label" >
                <span>Treatment Supporter</span>
            </div>
            <img className="person right" src="/system/coordinator.svg" />
        </DescriptionContainer>
    </Container>)

}


const Patient = () => {
    return (
        <div className="system-section patient">
            <Point
                text="Takes medication according to their treatment regimen."
                imgSrc="/system/pill.png"
            />
            <Point
                text="Uses patient app to fill out a daily report of their adherence, symptoms, and mood. "
                imgSrc="/system/phone.png"
            />
            <Point
                text="Takes metabolite test when app asks them to and submits photo of test results."
                imgSrc="/system/test.png"
            />
        </div>
    )
}

const Supporter = () => {
    return (
        <div className="system-section supporter">
            <Point
                text="Monitors overall progress of their cohort of patients using coordinator app."
                imgSrc="/system/desktop.png"
            />
            <Point
                text="Reviews submitted patient reports and follows up if necessary. app to fill out a daily report of their adherence, symptoms, and mood. "
                imgSrc="/system/check.png"
            />
            <Point
                text="Communicates with patients and provides support as needed. asks them to and submits photo of test results."
                imgSrc="/system/chat.png"
            />

        </div>
    )
}

const Point = (props) => {
    return (
        <TalkingPoint>
            <img src={props.imgSrc} />
            <p>{props.text}</p>
        </TalkingPoint>
    )
}

const DescriptionContainer = styled.div`
display: flex;
flex: 1 1 0;
flex-wrap: wrap;
position: relative;

.label{
    display: flex;
    flex-direction: column;
    span{
        font-family: Roboto, 'sans-serif';
        font-weight: 700;
        padding: .25em .75em;
        color: rgba(66, 133, 244, 1);
        text-transform: uppercase;
        background-color: rgba(66, 133, 244, 0.1);
        display: block;
        align-self: center;
        border-radius: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: .9em;
        line-height: 24px;

text-align: center;
letter-spacing: 0.05em;
    }
}

.person{
    width: 25%;
    height: auto;
    top: 3em;
    position: absolute;
}

.left{
    left: -5%;
}

.right{
    right: -5%;
}

.system-section{
    flex-basis: 25%;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.supporter > div > img{
    width: 50px;
    height: 50px;
}

.patient{
    border-right: 2px solid ${Colors.textBlue};
    div{
        margin: .5em 2em .5em 0;
    }
}

.supporter{
    div{
        margin: .5em 0em .5em 2em;
    }
}


`

const TalkingPoint = styled.div`
img{
    height: 80px;
    width: 80px;
    object-fit: contain;
    transform: translateX(-10px);
}

flex: 1 1 0px;
justify-content: flex-start;
display: flex;
background: #F2F5FA;
border-radius: 20px;
align-self: flex-start;
align-items: center;

p{
    padding: 0 .5em;
}

`

const Container = styled.div`
padding-bottom: 3em;
h2{
    padding: 1em 3em 1em 3em;
}
overflow: hidden;

`

export default System;