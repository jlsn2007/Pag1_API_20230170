const getDogBreeds = async () => {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        
        let breeds = data.data.map(breed => breed.attributes);
        
        const filteredBreeds = breeds.filter((_, index) => index % 3 === 0).slice(0, breeds.length - 1);
        const extraBreeds = [
            {
                name: "Ahuacatero",
                description: "Un perro leal y trabajador, ideal para el campo y el hogar.",
                life: { min: 10, max: 14 },
                male_weight: { min: 25, max: 35 },
                female_weight: { min: 20, max: 30 },
                hypoallergenic: false
            },
            {
                name: "Terrier de sivar",
                description: "Raza pequeña pero valiente, excelente compañía en la ciudad.",
                life: { min: 12, max: 16 },
                male_weight: { min: 5, max: 8 },
                female_weight: { min: 4, max: 7 },
                hypoallergenic: true
            }
        ];
        
        const finalBreeds = [...filteredBreeds, ...extraBreeds];
        
        finalBreeds.forEach(breed => {
            const { name, description, life, male_weight, female_weight, hypoallergenic } = breed;
            const card = document.createElement('div');
            card.classList.add('bg-gray-100', 'shadow-lg', 'rounded-xl', 'overflow-hidden', 'p-6', 'm-4', 'border-l-4', 'border-blue-500');
            card.innerHTML = `
            <h2 class="text-2xl font-semibold mb-3 text-blue-700">${name}</h2>
            <p class="text-gray-800 italic">${description}</p>
            <div class="mt-2 p-3 bg-white rounded-md shadow-sm">
                <p><strong>🐾 Life Hope:</strong> ${life.min} - ${life.max} Years</p>
                <p><strong>⚖️ weight:</strong> Male (${male_weight.min}-${male_weight.max} kg), Female (${female_weight.min}-${female_weight.max} kg)</p>
                <p><strong>🌿 Hipoalergyc:</strong> ${hypoallergenic ? 'Yes' : 'No'}</p>
            </div>
            `;
            cardsParent.appendChild(card);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
};

getDogBreeds();
