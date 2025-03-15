document.body.style.backgroundColor = 'black';

const getRickMortyCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');

        if (!response.ok) throw new Error('Error al obtener los datos');
            const data = await response.json();
            const cardsParent = document.getElementById('cards');
                data.results.forEach(character => {
                    const { name, status, species, gender, image } = character;
                    const card = document.createElement('div');

            card.classList.add('bg-gray-900', 'shadow-lg', 'rounded-xl', 'overflow-hidden', 'p-4', 'm-4', 'border-l-4', 'border-green-400');
            card.innerHTML = `
             <img src="${image}" alt="${name}" class="w-full h-48 object-cover rounded-t-lg">
                <div class="p-4 bg-gray-800 text-green-300">
                    <h2 class="text-2xl font-semibold mb-2 text-green-400">${name}</h2>
                        <p><strong>☠️ Estado:</strong> ${status}</p>
                        <p><strong>👽 Especie:</strong> ${species}</p>
                        <p><strong>🚻 Género:</strong> ${gender}</p>
                </div>
            `;
            cardsParent.appendChild(card);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
 };
 getRickMortyCharacters();