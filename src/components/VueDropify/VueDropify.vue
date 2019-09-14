<template>
    <div class="vue-dropify">
        <p>{{ hello }}</p>
    </div>
</template>

<script>

    export default {
        name: 'VueDropify',
        data: () => ({
            hello: 'Hai vue-dropify component!'
        }),
    }

</script>

<style scoped>
    .vue-dropify {
        color: #ff0000;
    }
</style>