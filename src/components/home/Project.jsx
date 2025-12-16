import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration"; // 기존 Jumbotron 경로 유지
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard"; // 새로 만든 카드 컴포넌트 import

const Projects = ({ heading, data }) => {
  // 데이터가 없거나 비어있으면 아무것도 렌더링하지 않음
  if (!data || data.length === 0) {
    return null;
  }

  return (
    // 섹션 배경색을 Experience와 다르게 흰색으로 설정하여 구분감 유지
    <section id="projects" className="section py-5" style={{ backgroundColor: "#fff" }}>
      <Container>
         {/* 제목 영역 */}
        <div className="d-flex justify-content-center align-items-center mb-5">
          <h2 className="display-4" style={{ fontWeight: "300" }}>{heading}</h2>
        </div>
        
        <Row>
          {data.map((pub, index) => (
            <ProjectCard
              key={`pub-card-${index}`}
              data={pub}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;