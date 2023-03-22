/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/


const member = [
    {
        name : 'Wayne',
        surname : 'Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela',
        surname : 'Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter',
        surname : 'Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela',
        surname : 'Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott',
        surname : 'Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara',
        surname : 'Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    }
]

let team = '';
const row = document.querySelector('.row');

for(let i = 0; i < member.length; i++){
    const memberTeam = 
    `
    <div class="col-4">
        <div class="card my-3">
            <img src="./img/${member[i].image}" class="card-img-top" alt="">
            <div class="card-body text-center">
                <h4 class="card-text">${member[i].name + ' ' + member[i].surname}</h4>
                <p class="card-text">${member[i].role}</p>
            </div>
        </div>
    </div>
    `;

    team += memberTeam;
}
row.innerHTML = team;