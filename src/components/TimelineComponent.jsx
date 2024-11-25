import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const TimelineComponent = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/api/timeline')
      .then(response => response.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={event.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <p>{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default TimelineComponent

