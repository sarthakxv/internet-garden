export const Para = ({ desc }: { desc: string }) => (
  <p
    style={{
      fontSize: "0.9em",
      color: "gray",
      marginTop: "20px",
      marginBottom: "5px",
    }}
  >
    {desc}
  </p>
);

export const ProjTimeline = ({ desc }: { desc: string }) => (
  <p
    style={{
      fontSize: "0.9em",
      color: "gray",
      margin: "0",
    }}
  >
    {desc}
  </p>
);

export default () => null;
