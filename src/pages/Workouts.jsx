import { useState } from 'react'
import { plants } from '../data/plants'
import PlantDetail from '../components/PlantDetail'

const Plants = () => {
  const [selectedCategory, setSelectedCategory] = useState('herbs')
  const [selectedPlant, setSelectedPlant] = useState(null)

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant)
  }

  const handleClosePlant = () => {
    setSelectedPlant(null)
  }

  return (
    <div className="plants-page">
      <div className="plants-header">
        <h1>Medicinal Plant Library</h1>
        <div className="category-buttons">
          <button 
            className={selectedCategory === 'herbs' ? 'active' : ''} 
            onClick={() => setSelectedCategory('herbs')}
          >
            Herbs
          </button>
          <button 
            className={selectedCategory === 'shrubs' ? 'active' : ''} 
            onClick={() => setSelectedCategory('shrubs')}
          >
            Shrubs
          </button>
          <button 
            className={selectedCategory === 'trees' ? 'active' : ''} 
            onClick={() => setSelectedCategory('trees')}
          >
            Trees
          </button>
        </div>
      </div>

      <div className="plant-grid">
        {plants[selectedCategory].map((plant) => (
          <div 
            key={plant.id} 
            className="plant-card"
            onClick={() => handlePlantClick(plant)}
          >
            <img src={plant.image} alt={plant.name} />
            <div className="plant-card-content">
              <h3>{plant.name}</h3>
              <p className="plant-meta">{plant.scientificName} • {plant.nativeRegion}</p>
              <p className="plant-description">{plant.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedPlant && (
        <PlantDetail 
          plant={selectedPlant} 
          onClose={handleClosePlant}
        />
      )}
    </div>
  )
}

export default Plants 