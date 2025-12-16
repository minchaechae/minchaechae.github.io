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
                      
                      <Col xs={4} md={3} lg="auto" className="text-md-right pt-1">
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

                      <Col xs={8} md={9} lg={true} className="pl-md-3 border-left-0">
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