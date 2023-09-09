function loadMonster(monsterName) {
    const baseURL = 'https://diegomaionevallarino.github.io/polsrol/';
    fetch(`${baseURL}/Monstruos/${monsterName}.json`)
        .then(response => response.json())
        .then(monsterData => {
            const html = generateMonsterHTML(monsterData);
            document.querySelector('#lista-monstruos').innerHTML = html;
        });
}
