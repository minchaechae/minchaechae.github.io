import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { experiences } from "../../editable-stuff/config";

const Experience = () => {
  if (!experiences.show) return null;

  return (
    <section className="section pb-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <h2 className="display-4" style={{ fontWeight: "300" }}>{experiences.heading}</h2>
        </div>

        <Row className="justify-content-center">
          <Col md={10} lg={9}>
            <div className="bg-white p-4 p-md-5 rounded shadow-sm border-0">
              <ul className="list-unstyled m-0">
                {experiences.data.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Row className="align-items-start">
                      
                      {/* [수정 포인트 1] 모바일 레이아웃 변경 */}
                      {/* xs={12} : 모바일에서는 한 줄 전체 차지 (위로 감) */}
                      {/* md={3}, lg="auto" : PC에서는 기존대로 왼쪽 배치 */}
                      {/* mb-2 mb-md-0 : 모바일에서만 날짜 아래에 여백 추가 */}
                      <Col 
                        xs={12} md={3} lg="auto" 
                        className="text-left text-md-right pt-1 mb-2 mb-md-0"
                      >
                        <span 
                           className="badge text-white py-2 rounded-pill" 
                           style={{ 
                             backgroundColor: "#4484ce", 
                             fontSize: "0.85rem",
                             width: "170px", 
                             display: "inline-block",
                             textAlign: "center"
                           }}
                        >
                          {item.date}
                        </span>
                      </Col>

                      {/* [수정 포인트 2] 내용 영역 */}
                      {/* xs={12} : 모바일에서는 한 줄 전체 차지 (아래로 내려감) */}
                      {/* pl-md-3 : PC에서만 왼쪽에 여백을 줌 (모바일은 줄바꿈 됐으니 여백 필요 없음) */}
                      <Col xs={12} md={9} lg={true} className="pl-0 pl-md-3 border-left-0">
                        <p style={{ fontSize: "1.05rem", color: "#333", margin: 0, lineHeight: "1.7", wordBreak: "keep-all" }}>
                          {item.role}
                        </p>
                      </Col>

                    </Row>
                    
                    {index !== experiences.data.length - 1 && (
                      <hr className="mt-4 mb-0" style={{ opacity: 0.1 }} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;