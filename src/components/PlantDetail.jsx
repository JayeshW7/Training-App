import React from 'react';
import PropTypes from 'prop-types';
import Plant3DViewer from './Plant3DViewer';

const PlantDetail = ({ plant, onClose, is3DView }) => {
  return (
    <div className="plant-detail-overlay">
      <div className="plant-detail">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="plant-detail-header">
          <h2>{plant.name}</h2>
          <div className="plant-meta">
            <span>{plant.scientificName}</span>
            <span>•</span>
            <span>{plant.nativeRegion}</span>
          </div>
          <p className="plant-description">{plant.description}</p>
        </div>

        <div className="plant-image">
          {is3DView ? (
            <Plant3DViewer modelUrl={plant.modelUrl} />
          ) : (
            <img src={plant.image} alt={plant.name} />
          )}
        </div>

        <div className="plant-properties">
          <h3>Medicinal Information</h3>
          {plant.properties.map((property, index) => (
            <div key={index} className="property-card">
              <div className="property-header">
                <h4>{property.name}</h4>
              </div>
              <div className="property-details">
                <p>{property.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="growing-info">
          <h3>Growing Information</h3>
          <p>{plant.growingInfo}</p>
        </div>

        <div className="harvesting-tips">
          <h3>Harvesting Tips</h3>
          <p>{plant.harvestingTips}</p>
        </div>
      </div>
    </div>
  );
};

PlantDetail.propTypes = {
  plant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    nativeRegion: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    modelUrl: PropTypes.string.isRequired,
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
      })
    ).isRequired,
    growingInfo: PropTypes.string.isRequired,
    harvestingTips: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  is3DView: PropTypes.bool.isRequired,
};

export default PlantDetail; 