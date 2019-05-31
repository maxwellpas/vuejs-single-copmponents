import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'
import App from './App.vue'
import Titulo from './components/Titulo.vue'
import NovoJogo from './components/NovoJogo.vue'
import Placar from './components/Placar.vue'
import TabelaClube from './components/TabelaClube.Vue'
import Time from './time'
import Modal from './components/Modal.vue'
import PlacarModal from './components/PlacarModal.vue'
import Clube from './components/Clube.vue'
import TimeClassificados from './components/TimeClassificados.vue'
import TimeRebaixados from './components/TimeRebaixados.vue'
import $ from 'jquery';
import PopperJs from 'popper.js';

window.jQuery = window.$ = $;
window.Popper = PopperJs;
require('bootstrap');

Vue.config.productionTip = false


Vue.filter('ucwords', (valor) => { valor.charAt(0).toUpperCase() + valor.slice(1) });

Vue.component('titulo', Titulo);
Vue.component('novo-jogo', NovoJogo);
Vue.component('placar', Placar);
Vue.component('tabela-clube', TabelaClube);
Vue.component('modal', Modal);
Vue.component('placar-modal', PlacarModal);
Vue.component('clube',Clube);
Vue.component('time-classificados', TimeClassificados);
Vue.component('time-rebaixados', TimeRebaixados);

new Vue({
	provide() {/** Tudo que está dentro desse provide, está disponível ppara qualquer filho que seja inject */
		return {
			timesColecao: [
				new Time('palmeiras', require('./assets/palmeiras_60x60.png')),
				new Time('Internacional', require('./assets/internacional_60x60.png')),
				new Time('Flamengo', require('./assets/flamengo_60x60.png')),
				new Time('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
				new Time('Santos', require('./assets/santos_60x60.png')),
				new Time('Botafogo', require('./assets/botafogo_60x60.png')),
				new Time('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
				new Time('Corinthians', require('./assets/corinthians_60x60.png')),
				new Time('Grêmio', require('./assets/gremio_60x60.png')),
				new Time('Fluminense', require('./assets/fluminense_60x60.png')),
				new Time('Bahia', require('./assets/bahia_60x60.png')),
				new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
				new Time('São Paulo', require('./assets/sao_paulo_60x60.png')),
				new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
				new Time('Sport', require('./assets/sport_60x60.png')),
				new Time('Ceará', require('./assets/ceara_60x60.png')),
				new Time('Vitória', require('./assets/vitoria_60x60.png')),
				new Time('Vasco', require('./assets/vasco_60x60.png')),
				new Time('América-MG', require('./assets/america_mg_60x60.png')),
				new Time('Paraná', require('./assets/parana_60x60.png')),
			]
		}
	},	
	render: h => h(App),
}).$mount('#app')
