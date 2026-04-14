async function loadTestProjects() {
    try {
        // We add a timestamp (?t=) to stop the browser from showing old cached data
        const response = await fetch('/projects.json?t=' + Date.now());
        const data = await response.json();
        const container = document.getElementById('project-container');
        
        container.innerHTML = ''; // Clear the "loading" text

        data.projects.forEach(p => {
            const div = document.createElement('div');
            // Applying your signature cyan style for the test
            div.style.border = "2px solid #00e0ff"; 
            div.style.padding = "15px";
            div.style.margin = "10px";
            div.style.borderRadius = "8px";
            div.style.color = "white";
            
            div.innerHTML = `
                <h3>${p.title}</h3>
                <p>Category: ${p.category}</p>
            `;
            container.appendChild(div);
        });
    } catch (e) {
        console.error("Fetch error:", e);
        document.getElementById('project-container').innerHTML = 
            '<p style="color: red;">No projects found yet. Please check /admin and add one!</p>';
    }
}

// Run the function when the page loads
window.onload = loadTestProjects;