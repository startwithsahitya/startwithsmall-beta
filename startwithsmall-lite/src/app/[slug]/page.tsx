export default function DynamicPage({ params }: { params: { slug: string } }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Welcome to {decodeURIComponent(params.slug)}
      </h1>
      <p style={styles.paragraph}>
        This page was dynamically generated based on user input.
      </p>
    </div>
  );
}

// Inline CSS styles for better readability
const styles = {
  container: {
    textAlign: "start" as const,
    marginTop: "50px",
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "#666",
  },
};
