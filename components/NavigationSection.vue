<template>
    <div class="navigation-section-container">
        <NavigationCard v-for="item in 5" />
    </div>
</template>
<script>
import NavigationCard from "./NavigationCard.vue";
export default {
    components: {
        NavigationCard
    }
}
</script>
<style>
    .navigation-section-container {
        padding-top: 5%;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 60px;
    }
</style>