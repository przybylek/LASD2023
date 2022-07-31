import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const AimsAndTopics = () => (
  <Container className="bg-light section">
    <a className='target' id='topics'/>
    <h2 className="display-4 anchor">Aims and Topics</h2>
    <p>The objective of LASD is to extend the state-of-the-art in lean and agile software development and spread best practices as well as stories of successful transitions and adaptations to new situations. LASD has already become a prominent forum where practitioners, researchers, and academics meet to share and discuss their concerns, experience, and research findings.</p>
    <p>Topics include (but are not restricted) to:</p>

      <ListGroup variant='flush' >
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Agile teams in the post-COVID era</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Lean and agile requirements engineering</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Scaling agile methods</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Distributed teams in Agile Software Development</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Challenges of migrating to lean and agile methods</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Balancing agility and discipline</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Combining lean and agile</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Lean and agile coaching</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Collaborative games in Software Process Improvement</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Lean and agility at the enterprise level</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Challenges of agile project management</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Agile gamification</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Measurement and metrics for agile projects, agile processes, and agile teams</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Innovation and creativity in agile teams</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Agile development for safety systems</ListGroup.Item>
<ListGroup.Item className="bg-light"><i className="fas fa-check-square"/> Tools for lean and Agile Software Development</ListGroup.Item>
      </ListGroup>
  </Container>
)

export default AimsAndTopics


