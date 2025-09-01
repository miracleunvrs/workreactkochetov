export default function Footer() {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  };

  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} My Website. All rights reserved.
    </footer>
  );
}