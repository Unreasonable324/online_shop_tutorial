<template>
    <div class="container">
        <div class="wrapper">
            <form action="">
                <div class="wrapper-selected-crypt">
                    <div class="selected-crypt" @click="selectedCrypt">Выбирите крипту</div>
                    <div class="choice-crypt">

                        <input type="radio" name="choice-crypt" id="btc">
                        <label for="btc" class="choice-crypt-item ">BTC</label>

                        <input type="radio" name="choice-crypt" id="ltc">
                        <label for="ltc" class="choice-crypt-item">LTC</label>

                        <input type="radio" name="choice-crypt" id="eth">
                        <label for="eth" class="choice-crypt-item ">ETH</label>

                        <input type="radio" name="choice-crypt" id="usdt">
                        <label for="usdt" class="choice-crypt-item ">USDT</label>

                    </div>
                </div>
                <div class="wrapper-selected-bank">
                    <div class="selected-bank" @click="selectedBank">Выбери банк</div>
                    <div class="choice-bank">
                        <input type="radio" name="choice-bank" id="tinkoff">
                        <label for="tinkoff" class="choice-bank-item ">TINKOFF</label>

                        <input type="radio" name="choice-bank" id="sber">
                        <label for="sber" class="choice-bank-item ">СБЕРБАНК</label>
                    </div>
                </div>
                <div class="wrapper-rub-or-crypt">
                    <div class="selected-rub-or-crypt">
                        <div class="choice-rub-or-crypt">
                            <input type="radio" name="choice-rub-or-crypt" id="rub">
                            <label for="rub" class="choice-rub-or-crypt-item ">RUB</label>

                            <input type="radio" name="choice-rub-or-crypt" id="crypt">
                            <label for="crypt" class="choice-rub-or-crypt-item ">CRYPT</label>
                        </div>
                    </div>
                </div>
                <div class="wrapper-sum">
                    <div class="selected-sum">
                        <input type="number" placeholder="Введите сумму">
                    </div>
                </div>
                <div class="wrapper-wallet">
                    <div class="selected-wallet">
                        <input type="text" placeholder="Введите кошелек">
                    </div>
                </div>
                <div class="wrapper-submit">
                    <div class="submit">
                        <input type="submit" value="Отправить">
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<script lang="js">
export default {
    name: "tgMenu",
    methods: {
        selectedCrypt() {
            var choiceCryptList = document.querySelector('.choice-crypt')
            choiceCryptList.style.display = choiceCryptList.style.display === 'block' ? '' : 'block'
            // console.log(choiceCryptList);
            // console.log("кнопка выбора крипты");
            var choiceCryptItems = document.querySelectorAll('.choice-crypt-item')
            // console.log(choiceCryptItems);
            console.log('до форич:', disabledCrypt);
            if (disabledCrypt == true) {
                disabledCrypt = false
                choiceCryptItems.forEach(function (choiceCryptItem) {
                    choiceCryptItem.addEventListener('click', function () {
                        console.log(choiceCryptItem.textContent, choiceCryptItem);
                        var selectedCrypt = document.querySelector('.selected-crypt')
                        // console.log(selectedCrypt.textContent,selectedCrypt);
                        selectedCrypt.textContent = choiceCryptItem.textContent
                        choiceCryptList.style.display = choiceCryptList.style.display === 'none' ? '' : 'none'
                        console.log('после форич ', disabledCrypt);
                    })
                })
            }
            console.log('если только этот форич значит все работает', disabledCrypt);
        },
        selectedBank() {
            var choiceBankList = document.querySelector('.choice-bank')
            choiceBankList.style.display = choiceBankList.style.display === 'block' ? '' : 'block'
            console.log(choiceBankList);
            console.log("кнопка выбора банка");
            var choiceBankItems = document.querySelectorAll('.choice-bank-item')
            console.log(choiceBankItems);
            if (disabledBank == true) {
                disabledBank = false
                choiceBankItems.forEach(function (choiceBankItem) {
                    choiceBankItem.addEventListener('click', function () {
                        console.log(choiceBankItem.textContent);
                        var selectedBank = document.querySelector('.selected-bank')
                        console.log(selectedBank.textContent);
                        selectedBank.textContent = choiceBankItem.textContent
                        choiceBankList.style.display = choiceBankList.style.display === 'none' ? '' : 'none'

                        // var radioActive = document.querySelector('input[name="choice-crypt"]:checked');
                        // console.log(radioActive);
                    })
                })
            }

        }
    }
}
var disabledBank = true
var disabledCrypt = true
</script>

<style scoped >
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Arimo', sans-serif;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

input,
textarea,
button {
    font-family: 'Arimo', sans-serif;

}

body {
    background: #656565;

}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.wrapper {

    background: whitesmoke;
    border-radius: 20px;
    padding: 20px;
}

.selected-crypt,
.selected-bank {
    cursor: pointer;
}

.wrapper-selected-crypt,
.wrapper-selected-bank {
    /* width: 200px; */
    position: relative;
}

.selected-crypt,
.selected-bank {
    position: relative;
    z-index: 1;
    padding: 10px;
    border: 1px solid blue;
    border-radius: 6px;
    margin-bottom: 5px;
}

.choice-crypt,
.choice-bank {
    z-index: 2;
    position: absolute;
    display: flex;
    /* width: 200px; */
    width: 100%;
    flex-direction: column;
    border: 1px solid blue;
    box-sizing: border-box;
    border-radius: 6px;
    display: none;
}

/* .choice-crypt-item::before {
  display: none;
  background: green;
  height: 35px;
  padding: 10px;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.6);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.6);
} */

.choice-crypt-item,
.choice-bank-item {
    display: block;
    background: green;
    height: 40px;
    padding: 10px;
    /* border-radius: 6px; */
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.6);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.6);
}

/* 
.choice-crypt .item-btc::before {
  content: 'BTC';
}


.choice-crypt .item-ltc::before {
  content: 'LTC';
}

.choice-crypt .item-eth::before {
  content: 'ETH';
}

.choice-crypt .item-usdt::before {
  content: 'USDT';
} */

/* .choice-crypt input[name=choice-crypt]:checked+label::before {
  background: red;
} */

.choice-crypt input[name=choice-crypt]:checked+label,
.choice-bank input[name=choice-bank]:checked+label,
.choice-rub-or-crypt input[name=choice-rub-or-crypt]:checked+label {
    background: red;
}

input[name=choice-crypt],
input[name=choice-bank],
input[name=choice-rub-or-crypt] {
    display: none;
}

.wrapper-rub-or-crypt {}

.selected-rub-or-crypt {
    border: 1px solid blue;
    border-radius: 6px;
    margin-bottom: 5px;
    overflow: hidden;
}

.choice-rub-or-crypt {
    height: 40px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

}

.choice-rub-or-crypt-item {
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;

}

.wrapper-sum {}

.selected-sum input,
.selected-wallet input,
.submit input {
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid blue;
    border-radius: 6px;
    margin-bottom: 5px;
    padding: 10px;
}

.selected-sum input::-webkit-outer-spin-button,
.selected-sum input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.wrapper-selected-bank {}

.selected-bank {}

.choice-bank {}

.choice-bank-item {}

.item-tinkoff {}

.item-sber {}

@media(max-width:430px) {
    .wrapper {
        width: 95vw;
    }
}
</style>