<template>
  <div id="app">
    <div class="body_container">
      <div class="container">
        <div class="wrapper">
          <div class="logo"> GarantCrypto24 <div class="simbol">&#128472;</div>
          </div>

          <div class="wrapper-selected-crypt">
            <!-- <div class="selected-crypt">Выбирите криптовалюту</div> -->
            <div class="choice-crypt">
              <div class="crypt_item">BTC</div>
              <div class="crypt_item">LTC</div>
              <div class="crypt_item">ETH</div>
              <div class="crypt_item">USDT</div>
            </div>
          </div>

          <div class="wrapper-selected-bank">
            <div class="selected-bank" @click="selectedBank">Выберите банк</div>
            <div class="choice-bank" v-if="choiceBank">
              <div class="bank_item">Tinkoff</div>
              <div class="bank_item">Сбер</div>
              <div class="bank_item">Альфа-Банк</div>
            </div>
          </div>

          <div class="wrapper-rub-or-crypt">
            <div class="selected-rub-or-crypt">
              <div class="choice-rub-or-crypt">
                <input type="radio" name="choice-rub-or-crypt" value="on" id="rub">
                <label for="rub" class="choice-rub-or-crypt-item ">RUB</label>

                <input type="radio" name="choice-rub-or-crypt" value="on" id="crypt">
                <label for="crypt" class="choice-rub-or-crypt-item ">CRYPT</label>
              </div>
            </div>
          </div>

          <div class="wrapper-sum">
            <div class="selected-sum">
              <input type="text" inputmode="decimal" placeholder="Введите сумму">
            </div>
          </div>

          <div class="wrapper-wallet">
            <div class="selected-wallet">
              <input type="text" placeholder="Введите кошелек">
            </div>
          </div>

          <div class="wrapper-submit">
            <div class="submit">
              <button class="sbmt" @click="sendExchangeRequest">Отправить</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      choiceBank: false,
    }
  },
  components: {
  },
  methods: {
    selectedBank() {
      this.choiceBank = !this.choiceBank
    },
  }

}

</script>

<style>
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
  /* background: #656565; */
  /* background: #f4ff00; */
  /* background: rgb(0, 186, 40); */
  /* background-image: url('./assets/photo_2023-03-03_14-28-48.jpg'); */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
}

.body_container {
  background: rgb(0, 186, 40);
  background: linear-gradient(322deg, rgba(0, 186, 40, 1) 45%, rgba(244, 255, 0, 1) 100%);
  width: 100vw;
  height: 100vh;
}

.container {

  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  padding-top: 20px;
}

.wrapper {
  width: 95vw;
  /* background: rgb(255 255 255 / 50%); */
  border-radius: 8px;
  padding: 15px;

}

.logo {
  color: rgba(0, 186, 40, 1);
  -webkit-text-stroke: 1px green;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;

}

.simbol {
  color: rgba(244, 255, 0, 1);

  transform: rotate(90deg);
}

.wrapper-selected-crypt {
  /* width: 80%; */
}

.selected-crypt,
.selected-bank {
  margin-bottom: 5px;

  /* border: 1px solid green; */
  /* width: 100%; */
  /* padding: 5px 10px; */
}

.wrapper-selected-bank {
  position: relative;
}

.choice-bank {
  border-radius: 8px;
  overflow: hidden;
  outline: 1px solid green;
  position: absolute;
  width: 100%;
}

.choice-crypt {
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  outline: 1px solid green;
  margin-bottom: 5px;
}

.crypt_item:nth-child(2n + 1):last-child {
  grid-column: 1 / span 2;
}

.crypt_item,
.bank_item,
.selected-bank {
  /* width: 100%; */
  display: flex;
  justify-content: center;
  background: #02ce2e;
  padding: 15px 10px;
  outline: 1px solid green;
}

.selected-bank {
  border-radius: 8px;

}

.choice-rub-or-crypt input[name=choice-rub-or-crypt]:checked+label {
  background: green;
}

.selected-rub-or-crypt {
  outline: 1px solid green;

  border-radius: 8px;
  margin-bottom: 5px;
  overflow: hidden;
}

.choice-rub-or-crypt {
  /* height: 40px; */
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

}

.choice-rub-or-crypt-item {
  background: #02ce2e;

  padding: 15px 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;

}

.wrapper-sum {}

.selected-sum input,
.selected-wallet input,
.sbmt {
  width: 100%;
  outline: none;
  border: 1px solid green;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 15px 10px;
  background: none;
}

.sbmt:active {
  background: #02ce2e;

}


.choice-rub-or-crypt input {
  display: none;
}
</style>
