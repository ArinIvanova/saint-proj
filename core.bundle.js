(()=>{var t={attr1:1,attr2:2,attr3:3};watch(t,["attr2","attr3"],(function(){alert("attr2 ��� attr3 ��������!")})),t.attr2=50;const r={CLOSED:0,FIRST_OPENDE:1,SECOND_OPENED:2,THIRD_OPENED:3},a={currentModalType:r};document.querySelector("#first-opener").addEventListener("click",(()=>{a.currentModalType=r.FIRST_OPEND}))})();