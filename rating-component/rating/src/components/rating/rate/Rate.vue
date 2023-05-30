<template>
    <base-card class="justify-start items-start">
        <!-- Star On Top -->
        <div class="rounded-full bg-project-light-blue p-4">
            <img src="../../../assets/images/icon-star.svg" alt="star icon">
        </div>
        <!-- Header -->
        <h1 class="text-white text-2xl font-extrabold">How did we do?</h1>
        <p class="text-project-light-gray text-sm">Please let us know how we did with your support request. All feedback is
            appreciated
            to help us improve our offering!</p>
        <div class="flex flex-row justify-between w-full">
            <div v-for="(tag, index) in aTags" :key="index" :class="{
                'flex justify-center items-center rounded-full bg-project-light-blue text-project-medium-gray w-10 h-10 hover:bg-project-light-gray transition duration-500': true,
                'bg-project-orange': index === currentSelected
            }" @click="selectTag(index)">
                <a href="#" class="border-none">{{ index + 1 }}</a>
            </div>
        </div>
        <!-- Submit Button -->
        <button @click="submitVote"
            class="bg-project-orange text-white w-full rounded-full group hover:bg-white transition duration-500 p-3">
            <span class="group-hover:text-project-orange">SUBMIT</span>
        </button>

    </base-card>
</template>

<script>
import BaseCard from "../../UI/BaseCard.vue";
export default {
    components: { BaseCard },
    data() {
        return {
            aTags: [
                { selected: false },
                { selected: false },
                { selected: false },
                { selected: false },
                { selected: false }
            ],
            currentSelected: null
        };
    },
    methods: {
        selectTag(index) {
            if (this.currentSelected !== index) {
                this.currentSelected = index;
                this.aTags[index].selected = true;
            } else {
                this.currentSelected = null;
                this.aTags[index].selected = false;
            }
        },
        submitVote() {
            if (this.currentSelected !== null) {
                this.$emit('vote', this.currentSelected + 1);
                this.$router.push({ name: 'RateSuccess' })
            }
        }
    }
};

</script>

