document.getElementById('session-tracker').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
      session: document.title,
      completed: document.querySelector('input[name="completed"]').checked,
      timestamp: new Date().toISOString()
    };
  
    // Replace with your Apps Script URL
    const SCRIPT_URL = 'your-apps-script-url';
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      
      if(response.ok) {
        alert('Progress saved!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  