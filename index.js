const athletes = [
    { id: 1, name: 'Michael Phelps', record: 'Most Olympic Gold Medals (23)' },
    { id: 2, name: 'Katie Ledecky', record: 'Fastest 800m Freestyle' },
    { id: 3, name: 'Ian Thorpe', record: 'Youngest World Champion' }
];

window.onload = () => {
    const list = document.getElementById('athletes-list');
    athletes.forEach(athlete => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="detail.html?id=${athlete.id}">${athlete.name} - ${athlete.record}</a>`;
        list.appendChild(li);
    });
};
