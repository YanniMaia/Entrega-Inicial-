// Lógica de Validação (Regra de Negócio)
function validarMateria(nome) {
    if (!nome || nome.trim() === "") return false;
    if (nome.length > 20) return false;
    return true;
}

// Lógica de interface
document.getElementById('addBtn')?.addEventListener('click', () => {
    const input = document.getElementById('materiaInput');
    const lista = document.getElementById('listaMaterias');

    if (validarMateria(input.value)) {
        const li = document.createElement('li');
        
        // Estrutura: Checkbox + Texto + Botão X
        li.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <input type="checkbox" class="check-materia">
                <span>${input.value}</span>
            </div>
            <button class="btn-delete" onclick="this.parentElement.remove()">X</button>
        `;

        // Evento para riscar o texto quando marcar o checkbox
        const checkbox = li.querySelector('.check-materia');
        checkbox.addEventListener('change', (e) => {
            li.style.textDecoration = e.target.checked ? "line-through" : "none";
            li.style.opacity = e.target.checked ? "0.6" : "1";
        });

        lista.appendChild(li);
        input.value = "";
    } else {
        alert("Nome inválido ou muito longo!");
    }
});

// Exportação para o Jest (Testes Automatizados)
if (typeof module !== 'undefined') {
    module.exports = { validarMateria };
}