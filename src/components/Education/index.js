import React from 'react'
import { Container, Wrapper, Title, Description, TimelineSection } from './EducationStyle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Description>
          Education is my foundation. Explore my academic journey to uncover the wealth of knowledge and skills I've gained. Here, you'll find the details of my achievements.
        </Description>
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length && <TimelineConnector style={{ background: '#990D4F' }} />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default index