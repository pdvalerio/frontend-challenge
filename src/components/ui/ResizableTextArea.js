export default {
    methods: {
        resizeTextarea (event) {
            event.target.style.height = 'auto';
            event.target.style.height = (event.target.scrollHeight) + 'px';
        },
        windowResize (event) {
            this.$el.style.height = 'auto';
            this.$el.style.height = (this.$el.scrollHeight) + 'px';
        }
    },
    mounted () {

        this.$nextTick(() => {
            this.$el.setAttribute('style', 'height:' + (this.$el.scrollHeight) + 'px; overflow-y:hidden;');
        })

        this.$el.addEventListener('input', this.resizeTextarea);

        window.addEventListener('resize', this.windowResize);
    },
    beforeDestroy () {
        this.$el.removeEventListener('input', this.resizeTextarea);
        window.removeEventListener('resize', this.windowResize);
    },
    render () {
        return this.$slots.default[0];
    },
}