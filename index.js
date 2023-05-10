//function createModal(text){
//const modal = document.createElement('div');
//modal.classList.add('First');
//modal.innerText = text;

  //  return modal;
//}

//document.querySelector('#app').appendChild(createModal("First"));

//определение нашего объекта, как нам нравится
var ex2 = {
    attr1: 1,
    attr2: 2,
    attr3: 3
    };
     
    //определение "наблюдателя" для атрибутов
    watch(ex2, ["attr2", "attr3"], function(){
        alert("attr2 или attr3 изменены!") ;
    });
     
    //при изменении одного из атрибутов будет вызван его наблюдатель
    ex2.attr2 = 50;

const MODAL_OPENED_TYPES ={
    CLOSED: 0,
    FIRST_OPENDE: 1,
    SECOND_OPENED: 2,
    THIRD_OPENED: 3,
}
const state = {
    currentModalType: MODAL_OPENED_TYPES,
}


document.querySelector('#first-opener').addEventListener('click',() => {
state.currentModalType = MODAL_OPENED_TYPES.FIRST_OPEND;
});