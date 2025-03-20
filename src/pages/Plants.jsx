import { useState } from 'react'
import { plants } from '../data/plants'
import PlantDetail from '../components/PlantDetail'
import Plant3DViewer from '../components/Plant3DViewer'

const Plants = () => {
  const [selectedCategory, setSelectedCategory] = useState('herbs')
  const [selectedPlant, setSelectedPlant] = useState(null)
  const [is3DView, setIs3DView] = useState(false)

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant)
  }

  const handleClosePlant = () => {
    setSelectedPlant(null)
  }

  const toggleView = () => {
    setIs3DView(!is3DView)
  }

  return (
    <div className="plants-page">
      <div className="plants-header">
        <h1>Medicinal Plant Library</h1>
        <div className="view-toggle">
          <button 
            className={!is3DView ? 'active' : ''} 
            onClick={toggleView}
          >
            2D View
          </button>
          <button 
            className={is3DView ? 'active' : ''} 
            onClick={toggleView}
          >
            3D View
          </button>
        </div>
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
            {is3DView ? (
              <Plant3DViewer modelUrl={plant.modelUrl} />
            ) : (
              <img src={plant.image} alt={plant.name} />
            )}
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
          is3DView={is3DView}
        />
      )}
    </div>
  )
}

export default Plants 