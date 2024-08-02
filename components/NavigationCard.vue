<template>
    <div class="navigation-card">
        <div class="image-container">
            <img src="/assets/images/common/image 25.png" alt="market">
        </div>
        <div class="card-title">
            <div class="card-title-icon">

            </div>
            <div class="card-title-text">
                <p>
                    AI Platform Ecosystem
                </p>
            </div>
        </div>
        <div class="card-description">
            Explore, publish, and integrate
            AI services on AI Marketplace's docs.
        </div>
        <div class="card-tree">
            <NavigationItem v-for="item in 5" />
        </div>
    </div>
</template>
<script>
import NavigationItem from './NavigationItem.vue';
export default {
    components: {
        NavigationItem
    }
}
</script>
<style>
.navigation-card {
    box-sizing: border-box;
    padding: 25px;
    width: 310px;
    background-color: var(--vp-c-white);
    border-width: 1px;
    border-style: solid;
    border-color: var(--vp-c-lightgray);
}

.dark .navigation-card {
    background-color: var(--vp-c-darkgray);
    border-color: var(--vp-c-gray);
}

.navigation-card p {
    padding: 0;
    margin: 0;
}

.navigation-card .card-title {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}
</style>