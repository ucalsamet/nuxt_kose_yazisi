<template>
  <div>
    <post-list :posts="fetchedPosts" />
    <About />
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";
import About from "@/components/home/About";
export default {
  components: {
    PostList,
    About
  },
  // data(){
  //   return{
  //     fetchedPosts:[]
  //   }
  // },
  created(){
    // this.$store.dispatch("setPosts",this.fetchedPosts)
  },
  computed:{
    fetchedPosts(){
      return this.$store.getters.getPosts
    }
    
  },
  // fetch(context){
  //   return new Promise((resolve,reject) => {
  //     context.store.dispatch("setPosts",[ 
  //           {id:1,title:"Yıldızlararası Yayında",
  //         subTitle:"2.sezon Başlıyor..",
  //         text:"Yıldızlararası bizi süprizlerle karşılıyor.",
  //         author:"Samet Uçal"}
  //         ])
  //     resolve();
  //   })
  // }
  // asyncData(context,callback){
  //   callback(null,{
  //         fetchedPosts:[ 
  //           {id:1,title:"Yıldızlararası Yayında",
  //         subTitle:"2.sezon Başlıyor..",
  //         text:"Yıldızlararası bizi süprizlerle karşılıyor.",
  //         author:"Samet Uçal"}
  //         ]
  //   })
  // }
};
</script>

<style scoped></style>
