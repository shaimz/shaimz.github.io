<template>
    <h1>Hello {{name}}</h1>
</template>

<script>
    import {defineComponent} from '@vue/composition-api';
    export default defineComponent({
        setup(){
            const name = ref('Cristi');

            return{name}
        }
    })
</script>
