Vue.use(VueResource);

new Vue({
  el: '#app',
  data: {
    relatedImgUrl: 'https://images.unsplash.com/photo-1533612773272-7230cca4169e',
    searchWord: '',
    searchResults: [],
  },
  methods: {
    searchWiki() {
      if (this.searchWord != '') {
        this.$http.get('//en.wikipedia.org/w/api.php?action=opensearch&origin=*&search='+this.searchWord).then(response => {
          console.log(response.body);
          this.searchResults = response.body;
          this.relatedImgUrl = 'https://source.unsplash.com/featured/?' + this.searchWord
        })
      } else {
        this.searchResults = [];
        this.relatedImgUrl = 'https://images.unsplash.com/photo-1533612773272-7230cca4169e';
        alert('Please input search word');
      }
    }
  },

})