import React from "react";

const Container = {
  width: "100%",
  height: "80vh",
  'margin-top':'70px'
};

const MainBodyStyle = {
  width: "100%",
  height: "80vh",
  "align-item": "center",
  margin: "200px  15%",
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    marginTop: "69px",
  },
  heading: {
    fontSize: "30px",
    marginBottom: "16px",
    color: "#333",
    "align-text": "center",
  },
  list: {
    // listStyleType: "none",
    padding: "0",
  },
  listItem: {
    marginBottom: "12px",
    fontSize: "15px",
  },
};

function MainBody() {
  return (
    <>
      <div style={Container}>
        <div style={MainBodyStyle}>
          <h1 style={styles.heading}>Why Learn React?</h1>
          <ol style={styles.list}>
            <li style={styles.listItem}>
              Build Single Page Applications (SPAs): React is well-suited for
              creating dynamic and interactive SPAs.
            </li>
            <li style={styles.listItem}>
              Component-Based Architecture: React's component-based architecture
              promotes reusability and maintainability of code.
            </li>
            <li style={styles.listItem}>
              Virtual DOM: React uses a virtual DOM for efficient updates and
              better performance in web applications.
            </li>
            <li style={styles.listItem}>
              Large Community and Ecosystem: React has a large and active
              community, along with a rich ecosystem of libraries and tools.
            </li>
            <li style={styles.listItem}>
              Declarative Syntax: React uses a declarative syntax, making it
              easier to understand and debug code.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default MainBody;
