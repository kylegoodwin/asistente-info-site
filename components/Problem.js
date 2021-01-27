import styled from 'styled-components'
import Statistic from './StatisticView'
import TextSection from './TextSection'

export default function Problem() {
    return (
        <>
        <ProblemArea id="problem" >
            <TextSection
                title="Tuberculosis (TB) remains a major global public health problem. "
                subtitle="The Issue"
            >
                <p>Despite TB being largely curable, we still see millions of preventable deaths each year due to the disease.</p>
                <p>Adherence to a treatment regimen is critical for TB patients, but obstacles such as treatment length, social stigma, and poverty often get in the way of successful treatment.</p>
            </TextSection>
            <FirstStats />
            </ProblemArea>
            <ProblemArea>
            <SecondStats />
            <TextSection
                title="Current TB treatments fail to reach their full potential. "
                subtitle="EXISTING TREATMENTS"
            >
                <p>The World Health Organization currently recommends the DOTS (Directly Observed Treatment, Short-Course) treatment strategy, where patients are observed while taking their medication.
                    Despite the adoption of DOTS, however, TB case rates in many countries are either stagnant or decreasing more slowly than expected.</p>

                <p>New patient-centered strategies are needed in order to drive long-term improvement in TB treatment outcomes.</p>
            </TextSection>
        </ProblemArea>
        </>
    )
}

const FirstStats = () => {
    return (
        <Statistics>
             <div>
            <Statistic
                stat="1.7 billion"
                subtitle="people infected with latent TB"
            />

            <Statistic
                stat="~4100"
                subtitle="TB-related deaths per day in 2018"
            />
            </div>
        </Statistics>
    )
}

const SecondStats = () => {
    return(
    <Statistics>
        <div>
        <Statistic
            stat="45%"
            subtitle="of new TB cases lost to follow-up"
        />

        <Statistic
            stat="10 years"
            subtitle="without any significant improvement in TB treatment success rate"
        />
        </div>
    </Statistics>)
}

const Statistics = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const ProblemArea = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    & > div,& > section{
        padding: 2em;
        flex-basis: 50%;
        flex: 1 1 0;
        box-sizing: border-box;
    }

`