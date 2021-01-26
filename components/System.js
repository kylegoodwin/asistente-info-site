import styled from 'styled-components'


const System = () => {


    return(<Container>
        <h2>System At A Glance</h2>
        <DescriptionContainer>
            <Patient />
            <Supporter />
        </DescriptionContainer>
    </Container>)

}


const Patient = () => {
    return(
        <div className="system-section">
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
        <div className="system-section">
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

.system-section{
    flex-basis: 50%;
}


`

const TalkingPoint = styled.div`
img{
    height: 100px;
}
display: flex;
background: #F2F5FA;
border-radius: 20px;
align-self: flex-start;
margin: 1em;
align-items: center;
padding: 1em;

`

const Container = styled.div`
padding: 3em;

`

export default System;