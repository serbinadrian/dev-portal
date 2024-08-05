<template>
    <footer class="custom-footer">
        <FooterSection v-for="section in footerConfig" :footerSectionData="section"/>
        <BottomOfFooter v-for="section in footerConfig" :footerSectionData="section"/>
    </footer>
</template>
<script>
import FooterSection from './FooterSection.vue';
import footerConfig from "../config/content/footerConfig";
import BottomOfFooter from './BottomOfFooter.vue';

export default {
    components: {
        FooterSection,
        BottomOfFooter
    },
    data() {
        return {
            footerConfig,
        }
    },
    mounted(){
        // const sidebar = document.getElementsByTagName("aside").item(0);

        // sidebar.style.paddingBottom = `${this.$el.clientHeight + 30}px`;

        // const observer = new ResizeObserver(entries => {
        //     for(const entry of entries) {
        //         sidebar.style.paddingBottom = `${entry.target.clientHeight + 30}px`;
        //     }
        // });

        // observer.observe(this.$el);
    },
}
</script>
<style>
.custom-footer{
    background-color: var(--vp-c-black);
    color: var(--vp-c-white);
    display: flex;
    flex-wrap:wrap;
    padding: 20px;
    justify-content: space-between;
    position: relative;
    z-index: 100;
    height: 400px;
    resize: both;
    overflow: scroll;
}
</style>