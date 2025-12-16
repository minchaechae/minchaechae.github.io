import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ data }) => {
  const { title, authors, venue, year, image, paperLink, videoLink, buttonText } = data;

  // [기능 추가] authors 문자열에서 "Minchae Kim"만 찾아서 굵게 만드는 함수
  const renderAuthors = (text) => {
    const target = "Minchae Kim";
    if (!text.includes(target)) return text;

    // 이름을 기준으로 문자열을 쪼개고, 그 사이에 <strong> 태그를 넣습니다.
    const parts = text.split(target);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index !== parts.length - 1 && <strong className="text-dark">{target}</strong>}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <Col lg={12} className="mb-4">
      <Card className="shadow-sm h-100 border-0 hover-shadow transition-all" style={{ borderRadius: "15px", overflow: "hidden" }}>
        <Card.Body className="p-0">
          <Row className="g-0 h-100">
            {/* [왼쪽] 이미지 영역 */}
            <Col md={4} className="d-flex align-items-center bg-light" style={{ minHeight: "200px" }}>
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="w-100 h-100 d-flex justify-content-center align-items-center text-muted">
                  No Image
                </div>
              )}
            </Col>

            {/* [오른쪽] 정보 영역 */}
            <Col md={8}>
              <div className="p-4 d-flex flex-column h-100">
                <h5 className="card-title font-weight-bold mb-3" style={{ fontSize: "1.25rem" }}>
                  {title}
                </h5>

                {/* [수정됨] renderAuthors 함수를 통해 이름 강조 */}
                <p className="card-text mb-2 font-italic text-secondary" style={{ fontSize: "1rem" }}>
                  {renderAuthors(authors)}
                </p>

                <p className="card-text text-muted mb-4">
                  <small>{venue}</small>
                </p>

                <div className="mt-auto d-flex flex-wrap gap-2">
                  {paperLink && (
                    <a
                      href={paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-pill px-3"
                    >
                      {buttonText || "Paper"}
                    </a>
                  )}
                  
                  {videoLink && (
                    <a
                      href={videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger btn-sm rounded-pill px-3 ml-2"
                    >
                      <i className="fab fa-youtube mr-2"></i> Video
                    </a>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;