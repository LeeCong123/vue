
    
<script>
export default {
    // name:'bbb',
    props:{
        leve:{
            type:Number,

        },
        
    },
    render(createElement){
            return createElement('h'+this.leve,this.$slots.default)
        }
}
</script>

<style  scoped>
 
</style>