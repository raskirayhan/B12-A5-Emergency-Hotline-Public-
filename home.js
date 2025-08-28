// love count
const love = document.getElementsByClassName('love');
let count = 0;

for (const lovec of love) {
    lovec.addEventListener('click', function () {

        count++;

        // update love-display element
        document.getElementById('love-display').innerText = count;
    });
}







//coin section
const call = document.getElementsByClassName('call-now');

for (const callbtn of call) {
    callbtn.addEventListener('click', function () {
        const availablecoin = parseInt(document.getElementById('coin').innerText);
        //try
        const find = callbtn.parentNode.previousElementSibling.children[2];
        console.log(find.innerText.trim());
        const hotlinetext = callbtn.parentNode.previousElementSibling.children[0];
        console.log(hotlinetext.innerText.trim());



        //try to add 999
        const helpline = document.getElementsByClassName('help-line')
        for (const help of helpline) {
            console.log(help);
        }
        // check first, jodi coin 20 er kom hoy return kore dibo
        if (availablecoin < 20) {
            console.log('no money');
            alert("You have not enough Balance you need at lest 20 coin")
            return;
        }
        else {
            alert("📞" + hotlinetext.innerText.trim() + " " + find.innerText.trim());

        }



        // erpor minus kora  
        const newcoin = availablecoin - 20;
        document.getElementById('coin').innerText = newcoin;


        const cartcontainer = document.getElementById('cards-container');
        const newcard = document.createElement("div")
        newcard.innerHTML = `
         <div class="recive flex justify-between p-4 bg-slate-100 rounded-lg my-3">
                        <div>
                         <p>${hotlinetext.innerText.trim()}</p>
                            <h1>${find.innerText.trim()}</h1>
                           
                        </div>
                        <div>
                      <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
        
        `
        cartcontainer.append(newcard)
    });
}
document.getElementById("clear-btn").addEventListener('click', function () {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";
});


const copyButtons = document.getElementsByClassName('cpy');
let sum=0;
for (const btn of copyButtons) {
    btn.addEventListener('click', function() {
        const find = btn.parentNode.previousElementSibling.children[2];
        console.log(find.innerText.trim());
         const number =find.innerText.trim();
          navigator.clipboard.writeText(number);
          alert("Number copied: " + number);
          const countid= document.getElementById('copy-count');
          sum++;
          countid.innerText=sum;

    });
};