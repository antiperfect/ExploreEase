// hotel.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const location = document.getElementById('location').value;
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      
      // Test URL and API key
      const apiKey = '4ROuzqVsXqGGrgImA0wnFrta7eo5SsGl'; // Replace with a valid test key if available
      const url = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${encodeURIComponent(location)}&checkInDate=${checkin}&checkOutDate=${checkout}`;
      
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });
        const data = await response.json();
        displayHotels(data);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    });
  
    function displayHotels(data) {
      const container = document.getElementById('hotels-container');
      container.innerHTML = ''; // Clear previous results
      
      if (data && data.offers && data.offers.length > 0) {
        data.offers.forEach(hotel => {
          const hotelDiv = document.createElement('div');
          hotelDiv.className = 'hotel';
          
          hotelDiv.innerHTML = `
            <h2>${hotel.hotel.name}</h2>
            <p>${hotel.hotel.address.lines.join(', ')}</p>
            <p>${hotel.offers[0].price.total} ${hotel.offers[0].price.currency}</p>
            <button>Book Now</button>
          `;
          
          container.appendChild(hotelDiv);
        });
      } else {
        container.innerHTML = '<p>No hotels found.</p>';
      }
    }
  });
  