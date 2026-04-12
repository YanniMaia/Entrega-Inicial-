const { validarMateria } = require('../src/script');

describe('Testes de Validação do Organizador de Estudos', () => {

    // Teste 1: Caminho Feliz (Entrada correta)
    test('Deve aceitar uma matéria válida (Matemática)', () => {
        const resultado = validarMateria('Matemática');
        expect(resultado).toBe(true);
    });

    // Teste 2: Entrada Inválida (Vazio)
    test('Deve rejeitar entrada vazia ou apenas espaços', () => {
        const resultado = validarMateria('   ');
        expect(resultado).toBe(false);
    });

    // Teste 3: Caso Limite (Texto muito longo)
    test('Deve rejeitar nomes de matérias com mais de 20 caracteres', () => {
        const textoLongo = 'História Geral da Civilização Antiga';
        const resultado = validarMateria(textoLongo);
        expect(resultado).toBe(false);
    });

});