<template>
    <h1>Working main page</h1>
</template>

<script>
    import {defineComponent,ref} from 'vue';
    export default defineComponent({
        setup(){
            const name = ref('Cristi');

            return{name}
        }
    })
</script>
