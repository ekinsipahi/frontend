<template>
    <!-- Card -->
    <div
        class="flex flex-col relative text-center rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-5 mx-auto my-auto bg-pgrayish-blue">
        <!-- Advice header-->
        <h4 class="text-sm text-pneon-green mb-5 mt-5 uppercase">{{ id }}</h4>
        <!-- Advice text -->
        <p class="text-xl text-plight-cyan mb-5">{{ advice }}</p>
        <!-- Pattern divider -->
        <img src="../../assets/images/pattern-divider-desktop.svg" alt="divider image" class="mb-5">
        <!-- Roll button -->
        <div class="relative mt-5">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button class="rounded-full p-3 mx-auto bg-pneon-green glow-on-hover" @click="getAdvice">
                    <img src="../../assets/images/icon-dice.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";

export default {
    data() {
        return {
            adviceApiURL: "https://api.adviceslip.com/advice",
            id: "Loading id",
            advice: "Loading Advice"
        }
    },
    mounted() {
        this.getAdvice()
    },
    methods: {
        async getAdvice() {
            try {
                const response = await axios.get(this.adviceApiURL);
                if (response.status !== 200) {
                    throw new Error("Failed to get advice from the api check endpoint or i dunno check the error code lol :)");
                }
                const fetchedAdvice = response.data.slip
                this.id = `advice #${fetchedAdvice.id}`;
                this.advice = `"${fetchedAdvice.advice}"`;
            } catch (error) {
                console.error(error);
                this.id = "Error"
                this.advice = error.message + " [" + error.code + "] "
            }
        }
    }
}
</script>
<style>
.glow-on-hover {
    transition: box-shadow 0.3s ease;
}

.glow-on-hover:hover {
    box-shadow: 0 0 10px hsl(150, 100%, 66%);
}
</style>