//App.jsx
import Card from './Card';
import FlowersImage from './Data/Flowers.png';


import './App.css'

function App() {
  return (
    <div>
      <Card
        title="Flowers"
        subtitle="What a beautiful flower !
         (2024)"
         image={FlowersImage}
        rating={5}
      />
    </div>
  );
}

export default App;