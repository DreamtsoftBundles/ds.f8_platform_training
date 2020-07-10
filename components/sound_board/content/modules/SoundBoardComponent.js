const { VueF8Utils } = require('vue/VueF8Utils');
const Component = require('core/Component');

const SoundBoardComponent = {
    name: 'SoundBoardComponent',
    props: ['serverData'],
    inject: ['f8'],

	data: () => ({
        query: '',
		noResults: true,
		currentSound: undefined, 
		results: []
    }),
	
    template: `
        <div class="soundboard-box">
			<div>
				<input ref="searchBox" class="form-control soundbox-input" placeholder="Type in sound" @keyup="queryBoard" v-model="query"/>
			</div>

			<div v-if="noResults">
				No results for {{query}}
			</div>
			<div v-else class="sounds">
				<div class="sound-item" v-for="result in results" @click="playSound(result.value)">
					<div>{{result.label}}</div>
				</div>
			</div>
			<hr/>
			<div>
				Sounds provided by <a target="_new" href="https://www.myinstants.com/">https://www.myinstants.com/</a>
			</div>
        </div>
    `,
	
	mounted() {
		setTimeout(function() {
			this.$refs.searchBox.focus()
		}.bind(this), 500);
	},

	destroyed() {
		this.stopSound();
	},

    methods: {
		stopSound() {
			if (this.currentSound) {
				try {
					this.currentSound.pause();
					this.currentSound = undefined;
				} catch(e) {}
			}
		},
		
		playSound(fileName) {			
			this.stopSound();
			
			this.currentSound = new Audio('https://www.myinstants.com' + fileName);  

			try {
				this.currentSound.play();
			} catch (err) {
				console.log('Failed to play...' + error);
			}
		},
		
        queryBoard() {
			if (!this.query || this.query.length <= 3) {
				this.noResults = true;
				return;
			}
			
			new Component('sound_board').ajax('results', {
				search: this.query
			},{
				callback: function(response) {
					if (response.status == 'good') {
						this.results = response.data.results;
						this.noResults = Object.isTrue(response.data.noResults);
					}
				}.bind(this)
			});			
        },
	}
};

module.exports = VueF8Utils.componentDefaults(SoundBoardComponent);
