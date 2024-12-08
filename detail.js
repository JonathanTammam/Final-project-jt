const athletes = {
    1: { name: 'Michael Phelps', bio: 'Most decorated Olympian of all time with 28 medals.', image: 'phelps.jpg' },
    2: { name: 'Katie Ledecky', bio: 'Holds multiple world records in freestyle swimming.', image: 'ledecky.jpg' },
    3: { name: 'Ian Thorpe', bio: 'One of Australia’s most famous swimmers.', image: 'thorpe.jpg' }
};

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const athlete = athletes[id];

    if (athlete) {
        const container = document.getElementById('record-details');
        container.innerHTML = `
            <h2>${athlete.name}</h2>
            <img src="${athlete.image}" alt="${athlete.name}" style="max-width: 100%;">
            <p>${athlete.bio}</p>
        `;
    }
};

