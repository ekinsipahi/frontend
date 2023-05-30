<template>
    <base-card class="justify-center items-center">
        <div class="p-4">
            <img src="../../../assets/images/illustration-thank-you.svg" alt="star icon">
        </div>
        <span class="text-project-orange text-sm bg-project-light-blue p-2 rounded-full">You selected {{ gotVote }} out of
            5</span>
        <h1 class="text-white text-2xl font-bold">Thank You!</h1>
        <p class="text-sm text-project-light-gray text-center"> We appreciate you taking the time to give a rating. If you
            ever need more support,
            don't hesitate to get in touch!</p>
    </base-card>
</template>

<script>
import BaseCard from "../../UI/BaseCard.vue";

export default {
    components: { BaseCard },
    props: ['gotVote'],
}
</script>