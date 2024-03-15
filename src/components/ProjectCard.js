import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,deployedSiteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={deployedSiteUrl} target="_blank" rel="noopener noreferrer" className="redirect">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
