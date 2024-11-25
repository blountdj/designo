export const locationBtnsInit = (container) => {

    const ukBtn = container.getElementById('uk-btn');
    const canadaBtn = container.getElementById('canada-btn');
    const australiaBtn = container.getElementById('australia-btn');

    function navigateToLocation(section) {
        const locationUrl = `https://designo-project.webflow.io/locations#${section}`;
        window.location.href = locationUrl;
    }

    ukBtn.addEventListener('click', () => navigateToLocation('uk-section'))
    canadaBtn.addEventListener('click', () => navigateToLocation('canada-section'))
    australiaBtn.addEventListener('click', () => navigateToLocation('australia-section'))
}