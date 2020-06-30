<script>
export default {
  data(){
    return{
      msg:'hello render'
    }
  },
  render:function(createElement){
    return createElement('h2',{
      'class':{
        one:true
      },
      style:{
        color:'red',
        'background-color':'#ccc'
      },
      attrs:{
        id:'ww'
      },
      on:{
        click:this.clickHandler
      }
    },this.msg)
  },
  methods:{
    clickHandler(){
      this.msg = 'hello render, hello vue'
    }
  }
}
</script>