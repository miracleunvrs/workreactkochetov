export default function ProfileCard({ name, email, avatar }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px'
  };

  return (
    <div style={cardStyle}>
      <img src={avatar} alt={name} style={imgStyle} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}