function generateMonsterHTML(monsterData) {
    // Función auxiliar para verificar si un valor está vacío o es un valor predeterminado
    function isValueEmpty(value) {
        return !value || value === "" || value.length === 0;
    }

    // Generar el HTML basado en el formato proporcionado
    let html = `
    <div class="btn-select" style="width: 720px; margin: 1rem auto">
        <div style="color: rgb(34, 34, 34); overflow-y: hidden;" class="position-relative">
            <div class="d-flex justify-content-between text-uppercase h3">
                <div>${monsterData.name}</div>
                <div>creature ${monsterData.level}</div>
            </div>
            <div style="background: rgb(119, 119, 119); height: 2px; margin: 0px 0px 0.2rem;"></div>
            <div class="d-flex flex-wrap">
                <div class="btn btn-pf btn-pf-edge">&nbsp;</div>
                <div class="btn btn-pf btn-pf-alignment text-uppercase">${monsterData.alignment}</div>
                <div class="btn btn-pf btn-pf-size text-uppercase">${monsterData.size}</div>
                <div class="btn btn-pf text-uppercase">${monsterData.type}</div>
                <div class="btn btn-pf btn-pf-edge">&nbsp;</div>
            </div>
            <div class="font-sheet">
                <div class="d-flex">
                    <div class="flex-fill">
                        <div>
                            <div class="line-height-120 hanging-indent">
                                <span class="font-weight-bold">Perception</span>
                                ${monsterData.perception.value}
                            </div>
                        </div>
                        <div>
                            <div class="line-height-120 hanging-indent">
                                <span class="font-weight-bold">Str</span>&nbsp;${monsterData.strength.value},
                                <span class="font-weight-bold">Dex</span>&nbsp;${monsterData.dexterity.value},
                                <span class="font-weight-bold">Con</span>&nbsp;${monsterData.constitution.value},
                                <span class="font-weight-bold">Int</span>&nbsp;${monsterData.intelligence.value},
                                <span class="font-weight-bold">Wis</span>&nbsp;${monsterData.wisdom.value},
                                <span class="font-weight-bold">Cha</span>&nbsp;${monsterData.charisma.value}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background: rgb(204, 204, 204); height: 2px; border-top: 1px solid rgb(136, 136, 136);"></div>
            <div class="font-sheet">
                <div class="line-height-120 hanging-indent">
                    <span class="font-weight-bold">AC</span>
                    ${monsterData.ac.value};
                    <span class="font-weight-bold">Fort</span>
                    ${monsterData.fortitude.value},
                    <span class="font-weight-bold">Ref</span>
                    ${monsterData.reflex.value},
                    <span class="font-weight-bold">Will</span>
                    ${monsterData.will.value}
                </div>
            </div>
            <div class="font-sheet">
                <div class="line-height-120 hanging-indent">
                    <span class="font-weight-bold">HP</span>
                    ${monsterData.hp.value}
                </div>
            </div>
            <div style="background: rgb(204, 204, 204); height: 2px; border-top: 1px solid rgb(136, 136, 136);"></div>
            <div class="font-sheet">
                <div class="line-height-120 hanging-indent">
                    <span class="font-weight-bold">Speed</span>
                    ${!isValueEmpty(monsterData.speed) ? monsterData.speed : "5 feet"}
                </div>
            </div>
            <div class="font-sheet">
                <div class="line-height-120 hanging-indent">
                    <span class="font-weight-bold"> Spells</span> 
                    DC ${monsterData.spelldc.value} ;
                </div>
            </div>
        </div>
    </div>
    `;
    return html;
}

// Usar la función cuando se cargue un monstruo:
// const html = generateMonsterHTML(monsterData);
// document.querySelector('#lista-monstruos').innerHTML = html;
