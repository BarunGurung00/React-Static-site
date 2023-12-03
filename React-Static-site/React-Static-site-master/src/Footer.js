import React from "react";

const Footer = () => {
  const date = new Date();
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
      position: "fixed",
      bottom: "0",
      width: "100%",
      heigth: "20vh",
    },
  };

  return (
    <div style={styles.container}>
      <p>{date.toString()} My Static Page. All rights reserved.</p>
    </div>
  );
};

export default Footer;
