const getTodos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        const cardsParent = document.getElementById('cards');

        // Lista de jugadores con nombres reales
        const jugadores = [
            'Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr.', 'Kylian Mbappé', 
            'Kevin De Bruyne', 'Robert Lewandowski', 'Mohamed Salah', 'Sergio Ramos',
            'Luka Modrić', 'Karim Benzema'
        ];

        data.forEach(contain => {
            const { id, title, completed } = contain;

            // Asignamos un jugador aleatorio de la lista
            const randomPlayer = jugadores[Math.floor(Math.random() * jugadores.length)];

            // Generamos una "posicion" y "edad" aleatorias para los jugadores
            const positions = ['Delantero', 'Defensor', 'Centrocampista', 'Portero'];
            const randomPosition = positions[Math.floor(Math.random() * positions.length)];
            const randomAge = Math.floor(Math.random() * (40 - 18 + 1)) + 18;

            const card = document.createElement('div');
            card.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden', 'p-4', 'm-2');
            card.style.backgroundColor = '#2c6b3f'; // Fondo verde oscuro

            card.innerHTML = `
 <h2 class="text-xl font-bold mb-2 text-white">Jugador #${id}</h2>
 <p class="text-white"><strong>Nombre:</strong> ${randomPlayer}</p>
 <p class="text-white"><strong>Posición:</strong> ${randomPosition}</p>
 <p class="text-white"><strong>Edad:</strong> ${randomAge} años</p>
 <p class="text-white"><strong>Estado:</strong> ${completed ? '✅ Activo' : '❌ Retirado'}</p>
            `;
            cardsParent.appendChild(card);
        });
    } catch (error) {
        console.error("Ha Ocurrido un Error: ", error.message);
    }
};
getTodos();
