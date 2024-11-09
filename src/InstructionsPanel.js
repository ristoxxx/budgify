import React from "react";

function InstructionsPanel() {
  return (
    <div
      style={{
        width: "20vw",
        height: "90vh",
        position: "fixed",
        top: "5vh",
        right: "0",
        padding: "20px",
        backgroundColor: "#000000",
        boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.3)",
        overflowY: "auto",
      }}
    >
      <h2>Instructions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        convallis lectus eget dolor vehicula, a fermentum lorem consequat.
        Integer vel pharetra metus, et ultrices nisl. Quisque egestas nulla vel
        sem scelerisque, sit amet vehicula nunc fermentum. Cras tincidunt, est
        at aliquam fermentum, risus mi pellentesque sapien, in gravida purus
        orci eget leo. Nullam auctor turpis at nunc tincidunt, quis porta arcu
        tristique.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec non justo vitae lacus sodales vehicula.
        Integer mollis consectetur dolor, id efficitur lectus. Aenean eu magna
        sed mauris elementum pharetra. Suspendisse potenti. Ut ultricies
        sagittis dolor id venenatis. Donec et leo tellus.
      </p>
    </div>
  );
}

export default InstructionsPanel;