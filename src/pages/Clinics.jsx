import { useState } from 'react'
import { clinics } from '../data/clinics'

export default function Clinics() {
  const [selectedClinic, setSelectedClinic] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const openBooking = (clinic) => {
    setSelectedClinic(clinic)
    setShowModal(true)
  }

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        textAlign: 'center', 
        background: 'linear-gradient(90deg, #2563eb, #7c3aed)', 
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem'
      }}>
        Nearby Clinics
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem' 
      }}>
        {clinics.map(clinic => (
          <div key={clinic.id} style={{
            background: 'white', 
            borderRadius: '24px', 
            padding: '2rem', 
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
            border: '1px solid #f3f4f6'
          }}>
            <img 
              src={clinic.image} 
              alt={clinic.name} 
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover', 
                borderRadius: '16px', 
                marginBottom: '1.5rem' 
              }}
            />
            
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem' 
            }}>
              {clinic.name}
            </h3>
            
            <p style={{ 
              color: '#2563eb', 
              fontWeight: '600', 
              marginBottom: '1rem' 
            }}>
              {clinic.specialty}
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                📍 {clinic.distance} • {clinic.address}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#fbbf24', fontSize: '20px' }}>⭐⭐⭐⭐</span>
                <span style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>
                  {clinic.rating}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => openBooking(clinic)}
              style={{
                width: '100%', 
                background: 'linear-gradient(90deg, #2563eb, #7c3aed)', 
                color: 'white', 
                padding: '1rem', 
                borderRadius: '16px', 
                fontWeight: 'bold', 
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Book Appointment →
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedClinic && (
        <div style={{
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          background: 'rgba(0,0,0,0.5)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 9999, 
          padding: '1rem'
        }}>
          <div style={{
            background: 'white', 
            borderRadius: '24px', 
            padding: '2rem', 
            maxWidth: '500px', 
            width: '100%'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '1.5rem' 
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {selectedClinic.name}
              </h2>
              <button 
                onClick={() => setShowModal(false)} 
                style={{ 
                  fontSize: '2rem', 
                  cursor: 'pointer', 
                  background: 'none', 
                  border: 'none' 
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                gap: '1rem' 
              }}>
                {selectedClinic.slots.map((slot, index) => (
                  <button key={index} style={{
                    padding: '1rem', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '12px',
                    background: 'white', 
                    cursor: 'pointer', 
                    fontWeight: '500'
                  }}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            
            <button style={{
              width: '100%', 
              background: '#059669', 
              color: 'white', 
              padding: '1rem',
              borderRadius: '16px', 
              fontWeight: 'bold', 
              fontSize: '1.1rem', 
              border: 'none'
            }}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
