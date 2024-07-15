document.addEventListener('DOMContentLoaded', function() {

    const ukBtn = document.getElementById('uk-btn');
    const canadaBtn = document.getElementById('canada-btn');
    const australiaBtn = document.getElementById('australia-btn');

    function navigateToLocation(section) {
        const locationUrl = `https://designo-project.webflow.io/locations#${section}`;
        window.location.href = locationUrl;
    }

    ukBtn.addEventListener('click', () => navigateToLocation('uk-section'))
    canadaBtn.addEventListener('click', () => navigateToLocation('canada-section'))
    australiaBtn.addEventListener('click', () => navigateToLocation('australia-section'))
})