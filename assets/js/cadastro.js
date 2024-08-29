const URL = "https://viacep.com.br/ws/01001000/json/";

async function buscarCep() {
    const cepInput = document.getElementById('cepInput').value;

    if (/^\d{8}$/.test(cepInput)) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`);
            const cep = await response.json();

            if (cep.erro) {
                document.getElementById('resultado').innerHTML = '<p>CEP não encontrado.</p>';
            } else {
                document.getElementById('resultado').innerHTML = `
                    <h2>Informações do CEP ${cepInput}:</h2>
                    <p>Logradouro: ${cep.logradouro}</p>
                    <p>Bairro: ${cep.bairro}</p>
                    <p>Cidade: ${cep.localidade}</p>
                    <p>Estado: ${cep.uf}</p>
                `;
            }
        } catch (error) {
            document.getElementById('resultado').innerHTML = `<p>Erro na consulta do CEP: ${error.message}</p>`;
        }
    } else {
        document.getElementById('resultado').innerHTML = '<p>CEP inválido. Digite um CEP válido com 8 dígitos.</p>';
    }
}
