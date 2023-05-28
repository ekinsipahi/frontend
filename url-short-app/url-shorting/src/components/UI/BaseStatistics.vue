<template>
    <section class="mt-16 bg-p-gray pb-8 relative">
        <!-- Enter url to shorten it.-->
        <div class="shorter-div md:w-[700px] lg:w-[1000px]">
            <div class="flex flex-col md:flex-row gap-8">
                <input type="text" v-model="userUrl" placeholder="Shorten a link here..."
                    class="w-[200px] md:w-[400px] lg:w-[600px] rounded-lg p-1 pl-5">
                <a class="block rounded-lg bg-p-cyan px-5 py-2.5 font-medium cursor-pointer text-white transition duration-500 hover:bg-light-cyan-hover"
                    @click="makeUrlShort">
                    Shorten it!
                </a>
            </div>
        </div>
        <div class="mx-auto flex flex-col max-w-screen-2xl items-center gap-28 px-4 sm:px-6 lg:px-8">
            <!-- Results -->
            <div class="flex  mt-[150px] w-[300px] flex-col p-8 gap-y-8 rounded-xl md:w-[700px] lg:w-50rem">
                <!-- Result 1 -->
                <div v-for="url in userUrlList"
                    class="flex flex-col bg-white p-3 rounded-xl gap-y-3 md:flex-row justify-between">
                    <div class="p-3">
                        <p class="text-sm">{{ url.url }}</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-2">
                        <p class="text-p-cyan text-sm p-3">{{ url.shortUrl }}</p>
                        <a @click="copyBtn(url.shortUrl, url.id)" ref="copyButton"
                            class="block rounded-lg cursor-pointer bg-p-cyan p-3 font-medium text-white text-sm transition duration-500 hover:bg-light-cyan-hover">
                            Copy
                        </a>
                    </div>
                </div>

            </div>

            <div class="mx-auto text-center font-bold text-p-dark-violet">
                <h1 class="text-4xl mb-8">Advanced Statistics</h1>
                <p class="text-sm">Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>
            <!-- Brand Recognition -->
            <div
                class="flex flex-col big-tablet:relative items-center big-tablet:h-96 w-full mt-20 big-tablet:gap-5 gap-16">
                <hr class="big-tablet:absolute border-4 border-p-cyan w-10/12 top-1/2">
                <div class="big-tablet:absolute big-tablet:w-1/4 top-16 left-0">
                    <div class="relative bg-white p-8 rounded-lg">
                        <div class="absolute -mt-12 bg-p-dark-violet p-4 rounded-full top-[-10px]">
                            <img src="../../assets/images/icon-brand-recognition.svg" alt="">
                        </div>
                        <h3 class="mb-5 font-bold text-sm 2xl:text-lg">Brand Recognition</h3>
                        <p class="text-p-grayish-violet text-sm">
                            Boost your brand recognition with each click. Generic links don't
                            mean a thing. Branded links help instil confidence in your content.

                        </p>
                    </div>
                </div>
                <!-- Detailed Records -->
                <div class="big-tablet:absolute big-tablet:w-1/4 top-24 left-1/3">
                    <div class="relative bg-white p-8 rounded-lg">
                        <div class="absolute -mt-12 bg-p-dark-violet p-4 rounded-full top-[-10px]">
                            <img src="../../assets/images/icon-detailed-records.svg" alt="">
                        </div>
                        <h3 class="mb-5 font-bold text-sm 2xl:text-lg">Detailed Records</h3>
                        <p class="text-p-grayish-violet text-sm">
                            Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.

                        </p>
                    </div>
                </div>
                <!-- Fully Customizable -->
                <div class="big-tablet:absolute big-tablet:w-1/4 top-32 left-2/3">
                    <div class="relative bg-white p-8 rounded-lg">
                        <div class="absolute -mt-12 bg-p-dark-violet p-4 rounded-full top-[-10px]">
                            <img src="../../assets/images/icon-fully-customizable.svg" alt="">
                        </div>
                        <h3 class="mb-5 font-bold text-sm 2xl:text-lg">Fully Customizable
                        </h3>
                        <p class="text-p-grayish-violet text-sm">
                            Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            apiUrl: "https://api.shrtco.de/v2/shorten?url=",
            userUrl: "",
            shortedUrl: "",
            userUrlList: [],
            counter: 0,
        }
    },
    methods: {
        async makeUrlShort() {
            try {
                const response = await axios.get(this.apiUrl + this.userUrl);
                if (!response.data.ok)
                    throw new Error("Something went wrong!");
                this.shortedUrl = response.data.result['full_short_link'];
                const newUrlData = {
                    id: this.counter,
                    url: response.data.result.original_link,
                    shortUrl: response.data.result['full_short_link']
                }
                this.userUrlList.push(newUrlData);
                this.shortedUrl = "";
                this.userUrl = "";
                this.counter++;
                console.log(newUrlData)
            } catch (error) {
                console.error(error);
            }
        },
        copyBtn(url, id) {
            navigator.clipboard.writeText(url);
            this.$refs.copyButton[id].innerText = "Copied!";
            setTimeout(() => {
                this.$refs.copyButton[id].innerText = "Copy";
            }, 2000)
        }
    },

}
</script>

<style>
.shorter-div {
    background-image: url('../../assets/images/bg-shorten-desktop.svg');
    background-color: hsl(257, 27%, 26%);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem;
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.w-50rem {
    width: 60rem;
}
</style>