const insert_advice = document.getElementById('advice')
const insert_advice_id = document.getElementById('advice_id')
const btn = document.getElementById('btn').addEventListener('click', getAdvice)


async function  getAdvice(){
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    const advice_json = await resposta.json();
    
    insert_advice_id.innerHTML = `ADVICE #${advice_json.slip.id}`;
    insert_advice.innerHTML = advice_json.slip.advice;
    
}
getAdvice();


