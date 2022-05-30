const app = new Vue({
    el:'#app',
    data:{
        personas:[],
        albums: []
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((respuesta) => {
                console.log(respuesta.data)
                this.personas = respuesta.data
            })
        
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((respuesta) => {
            console.log(respuesta.data)
            this.albums = respuesta.data
        })
    }
})