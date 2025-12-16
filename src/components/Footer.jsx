import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  // [수정된 부분] 내용(children)이 없으면 아예 아무것도 그리지 마라!
  if (!props.children) {
    return null;
  }

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
      </Container>
    </footer>
  );
};

export default Footer;