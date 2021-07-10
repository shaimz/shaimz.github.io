<template>
    <div>
        <router-view></router-view>
    </div>
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
