export const searchMixin = {
    data() {
        return {
            query: ''
        }
    },
    computed: {},
    methods: {
        onQueryChange(e) {
            // console.log(e)  // 返回最新值
            this.query = e.trim()   // 去空格
        }
    }
}