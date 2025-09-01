import Header from './components/Header.jsx'
import ProfileCard from './components/ProfileCard/Profilecard.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <ProfileCard 
        name="John Doe" 
        email="john.doe@example.com" 
        avatar="https://i.pravatar.cc/100"
      />
      <Footer />
    </div>
  )
} 