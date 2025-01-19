function criaCal(){
    return{
        display:document.querySelector('.display'),
        iniciar(){
            this.cliqueBot();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.igualC();
                }

            });
        },

        clearDisplay(){
            this.display.value = '';
        },
        delet(){
            this.display.value = this.display.value.slice(0, -1);
        },
        igualC(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta invalida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('conta invalida');
                return;
            }
        },



        cliqueBot(){
            document.addEventListener('click', (e) =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnPaDisplay(el.innerText);
                    this.display.focus();
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.delet();
                }

                if(el.classList.contains('btn-eq')){
                    this.igualC();
                }

            });
        },

        btnPaDisplay(valor){
            this.display.value += valor;
        }


    };
}
const calculadora = criaCal();
calculadora.iniciar();