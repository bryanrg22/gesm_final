import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCircle } from 'react-icons/fa';
import { timelineEvents } from '../data/timelineData';

function Timeline() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Historical Timeline</h1>
      <VerticalTimeline>
        {timelineEvents.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            className="vertical-timeline-element--work"
            date={event.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaCircle />}
            contentStyle={{ background: 'rgb(243, 244, 246)', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(243, 244, 246)' }}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">{event.title}</h3>
            <p className="vertical-timeline-element-subtitle text-gray-600">{event.date}</p>
            <p className="mt-2">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

