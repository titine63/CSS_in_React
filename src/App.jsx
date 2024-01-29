import Card from './Card';

import './App.css'

function App() {
  return (
    <div>
      <Card
        title="Flowers"
        subtitle="What a beautiful flower !
         (2024)"
        image="https://files.oaiusercontent.com/file-IJ6szSOiugXgELK4y9nYehOY?se=2024-01-29T14%3A49%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4e336a2d-a4d5-42b7-98cd-7f2ad1b1907f.webp&sig=McnON/rJ/MrnvvEbfPpFBv5sRURL4y2jBMYwix4572U%3D"
        rating={5}
      />
    </div>
  );
}

export default App;