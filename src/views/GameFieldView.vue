<template>
  <div id="container">
    <p class='overline'>{{ score }}</p>
    <TyperElement
      propText=""
      :textForTyping='pickedVerb[4]'
    />
    <form id="verbs_form" autocomplete="off">
      <div id='verb-inputs_container'>
        <v-text-field
          id="input-1"
          class='d-inline-block mx-3'
          :label='inputs[1].label'
          v-model='inputs[1].value'
          :readonly='isDefeated'
          :error-messages='inputs[1].hint'
          :success='isDefeated && !inputs[1].isIncorrect'
          @input.native='inputs[1].value = inputs[1].value.toLowerCase().trim()'
        />
        <v-text-field
          id="input-2"
          class='d-inline-block mx-3'
          :label='inputs[2].label'
          v-model="inputs[2].value"
          :readonly="isDefeated"
          :error-messages='inputs[2].hint'
          :success='isDefeated && !inputs[2].isIncorrect'
          @input.native='inputs[2].value = inputs[2].value.toLowerCase().trim()'
        />
        <v-text-field
          id="input-3"
          class='d-inline-block mx-3'
          :label='inputs[3].label'
          v-model="inputs[3].value"
          :readonly="isDefeated"
          :error-messages='inputs[3].hint'
          :success='isDefeated && !inputs[3].isIncorrect'
          @input.native='inputs[3].value = inputs[3].value.toLowerCase().trim()'
        />
      </div>
      <v-btn
        v-if="!isDefeated"
        type="submit"
        outlined
        class='mt-3'
        @click.native.prevent="tryToSubmitVerbs">
        Submit
      </v-btn>
      <template v-if="isDefeated">
        <v-btn outlined class='mt-3 mx-1' @click.native='$router.go()'>
          Restart
        </v-btn>
        <v-btn outlined class='mt-3 mx-1' type="submit" to='/score-view'>
          Score view
        </v-btn>
      </template>
    </form>
  </div>
</template>

<script>
  import TyperElement from "@/components/Typer-Element.vue";

  export default {
    name: "GameField",

    props: {
      verbs: {
        type: Array,
        required: true,
        default: [["0","null","null","null","Error: the prop-verbs was not received from the parent"]]
      }
    },

    components:{
      TyperElement
    },

    data: function () {
      return {
        pickedVerb: [],

        inputs: {
          1: {
            value: '',
            label: 'Infinitive (v1)',
            isIncorrect: false,
            hint: ''
          },

          2: {
            value: '',
            label: 'Past simple (v2)',
            isIncorrect: false,
            hint: ''
          },

          3: {
            value: '',
            label: 'Past participle (v3)',
            isIncorrect: false,
            hint: ''
          }
        },

        isDefeated: false,

        textForTyping: ''
      }
    },
    methods: {
      pickRandomVerb(verbs) {
        let nextVerb = verbs[Math.floor( Math.random() * verbs.length )];
        console.dir(nextVerb);

        return nextVerb;
      },

      tryToSubmitVerbs() {
        this.checkEachVerb();

        if (this.isDefeated) {
          this.$emit("update:score", this.score);
          document.activeElement.blur();
          return;
        }

        this.continueToPlay();
      },

      checkEachVerb() {
        for (let i = 1; i < 4; i ++) {
          if (this.pickedVerb[i] !== this.inputs[i].value.toLowerCase().trim()) {
            this.inputs[i].isIncorrect = true;
            this.isDefeated = true;

            this.inputs[i].hint = this.pickedVerb[i];
          }
        }
      },

      continueToPlay() {
        this.score++;
        this.pickedVerb = this.pickRandomVerb(this.verbs);
        this.resetInputs();
        this.input_1.focus();
      },

      resetInputs() {
        this.inputs[1].value = this.inputs[2].value = this.inputs[3].value = '';
      }
    },

    created() {
      this.score = 0;
      this.$emit("update:score", this.score);

      this.pickedVerb = this.pickRandomVerb(this.verbs);
    },

    mounted() {
      this.input_1 = document.getElementById('input-1');
      this.input_2 = document.getElementById('input-2');
      this.input_3 = document.getElementById('input-3');
    }
  }
</script>

<style scoped>
  #container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
</style>
