import styled from 'styled-components'
import Colors from '../utility/Colors'


const System = () => {


    return(<Container>
        <h2>System At A Glance</h2>
        <DescriptionContainer>
            <img className="person left" src="/system/patient.svg" />
            <div className="system-section" />
            <Patient />
            <Supporter />
            <div className="system-section" />
            <img className="person right" src="/system/coordinator.svg" />
        </DescriptionContainer>
    </Container>)

}


const Patient = () => {
    return(
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
    return(
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
    return(
        <TalkingPoint>
            <img src={props.imgSrc} />
            <span>{props.text}</span>
        </TalkingPoint>
    )
}

const DescriptionContainer = styled.div`
display: flex;
flex: 1 1 0;
flex-wrap: wrap;
position: relative;

.person{
    width: 25%;
    height: auto;
    object-fit: cover;
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
}

.supporter > div > img{
    width: 50px;
    height: 50px;
}

.patient{
    border-right: 2px solid ${Colors.textBlue}
}


`

const TalkingPoint = styled.div`
img{
    height: 80px;
    width: 80px;
    object-fit: contain;
}
display: flex;
background: #F2F5FA;
border-radius: 20px;
align-self: flex-start;
margin: 1em;
align-items: center;

`

const Container = styled.div`
h2{
    padding: 1em 3em;
}
overflow: hidden;

`

export default System;