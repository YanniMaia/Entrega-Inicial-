describe('Integração com BrasilAPI - Feriados', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('deve buscar feriados e retornar lista com sucesso', async () => {
    const mockFeriados = [
      { date: '2025-01-01', name: 'Confraternização Universal' },
      { date: '2025-04-21', name: 'Tiradentes' }
    ];

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockFeriados)
    });

    const response = await fetch('https://brasilapi.com.br/api/feriados/v1/2025');
    const data = await response.json();

    expect(data).toHaveLength(2);
    expect(data[0].name).toBe('Confraternização Universal');
  });

  test('deve lidar com erro na API sem quebrar a aplicação', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Falha de rede'));

    await expect(
      fetch('https://brasilapi.com.br/api/feriados/v1/2025')
    ).rejects.toThrow('Falha de rede');
  });
});