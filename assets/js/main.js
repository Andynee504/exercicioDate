/*
(() => {

    // const titulo = document.getElementsByClassName(`.container`)
    // titulo.innerHTML = (`${semana}, ${dia} de ${mes} de ${ano}<br>${hora}:${minuto}:${segundo}`)

    const data = new Date();

    function formataData(data) {
        function zeroAEsquerda(num) {
            return num >= 10 ? num : `0${num}`;
        }
        const diasDaSemana = [`Domingo`, `Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sabado`];
        const nomeDoMes = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];
        const dia = data.getDate();
        const mes = nomeDoMes[data.getMonth()];
        const ano = data.getFullYear();
        const hora = data.getHours();
        const minuto = zeroAEsquerda(data.getMinutes());
        const segundo = zeroAEsquerda(data.getSeconds());
        const semana = diasDaSemana[data.getDay()];
        return `${semana}, ${dia} de ${mes} de ${ano}<br>${hora}:${minuto}:${segundo}`;
    }

    function escreveData() {
        const titulo = document.querySelector(`.container h1`);
        titulo.innerHTML = formataData(data);
    }

    escreveData();

})();
*/

(() => {
    const title = document.querySelector(`.container h1`);
    const data = new Date();
    title.innerHTML = `${data.toLocaleDateString(`pt-BR`, { dateStyle: `full` })}<br>${data.toLocaleTimeString(`pt-BR`, { timeStyle: `short` })}`;
})();