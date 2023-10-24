import React from 'react';
import { Container, Wrapper, Title, Description, TimelineSection } from './AchievementsStyle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AchievementCard from '../Cards/AchievementCard';
import { achievements } from '../../data/constants';

const index = () => {
    return (
        <Container id="achievements">
            <Wrapper>
                <Title>Achievements</Title>
                <Description>
                    Explore my notable accomplishments and awards. These achievements reflect my commitment and passion for problem-solving, coding, and innovation.
                </Description>
                <TimelineSection>
                    <Timeline>
                        {achievements.map((achievements, index) => (
                            <TimelineItem>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <AchievementCard achievements={achievements} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== achievements.length - 1 && <TimelineConnector style={{ background: '#990D4F' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index