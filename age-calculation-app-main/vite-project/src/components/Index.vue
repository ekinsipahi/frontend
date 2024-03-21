<template>
    <main class="h-full flex items-center justify-center p-3 sm:p-0">
        <div
            class="bg-ProjectWhite sm:w-[75%] md:w-[70%] lg:w-[55%] xl:w-[45%] p-10 rounded-br-[30%] rounded-2xl shadow-xl">
            <!-- Give height if needed at the end -->
            <div class="flex">
                <div class="flex flex-col">
                    <label
                        :class="{ 'text-ProjectLightRed': displayEmptyError, 'text-ProjectOffBlack': !displayEmptyError }"
                        class="text-[14px] mb-2 font-bold  uppercase">DAY</label>
                    <input type="text" placeholder="DD" v-model="dayInput"
                        :class="{ 'border-ProjectLightRed': displayEmptyError || displayFutureDateError, 'border-ProjectLightGray': !displayEmptyError }"
                        class="w-2/3 h-1/2 p-3 border-2 focus:outline-none rounded-lg text-[32px] font-bold">
                    <span :class="{ 'block': displayEmptyError, 'hidden': !displayEmptyError }"
                        class="text-[14px] text-ProjectLightRed">This field is required!</span>
                    <span :class="{ 'block': displayFutureDateError, 'hidden': !displayFutureDateError }"
                        class="text-[14px] text-ProjectLightRed">What kind of date is this!</span>
                </div>

                <div class="flex flex-col">
                    <label for=""
                        :class="{ 'text-ProjectLightRed': displayEmptyError, 'text-ProjectOffBlack': !displayEmptyError }"
                        class="text-[14px] mb-2 font-bold  uppercase">MONTH</label>
                    <input type="text" placeholder="MM" v-model="monthInput"
                        :class="{ 'border-ProjectLightRed': displayEmptyError || displayFutureDateError, 'border-ProjectLightGray': !displayEmptyError }"
                        class="w-2/3 h-1/2 p-3 border-2 focus:outline-none rounded-lg text-[32px] font-bold 
                        ">
                    <span :class="{ 'block': displayEmptyError, 'hidden': !displayEmptyError }"
                        class="text-[14px] text-ProjectLightRed">This field is required!</span>
                </div>

                <div class="flex flex-col">
                    <label for=""
                        :class="{ 'text-ProjectLightRed': displayEmptyError, 'text-ProjectOffBlack': !displayEmptyError }"
                        class="text-[14px] mb-2 font-bold  uppercase">YEAR</label>
                    <input type="text" placeholder="YY" v-model="yearInput"
                        :class="{ 'border-ProjectLightRed': displayEmptyError || displayFutureDateError, 'border-ProjectLightGray': !displayEmptyError }"
                        class="w-2/3 h-1/2 p-3 border-2 focus:outline-none rounded-lg text-[32px] font-bold
                         ">
                    <span :class="{ 'block': displayEmptyError, 'hidden': !displayEmptyError }"
                        class="text-[14px] text-ProjectLightRed">This field is required!</span>
                </div>

            </div>
            <div class="flex flex-row justify-between items-center gap-3 relative sm:static">
                <div class="w-full">
                    <hr>
                </div>
                <button @click="SubmitForm">
                    <img src="../assets/images/icon-arrow.svg" alt="arrow icon" class="bg-ProjectPurple rounded-full p-3 absolute sm:static 
                        translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] 
                        sm:translate-x-0 sm:translate-y-0 sm:top-0 sm:left-0
                        mt-3 sm:mt-0">
                </button>
            </div>
            <div class="flex flex-col mt-16 sm:mt-1 italic text-[44px] sm:text-[64px] gap-5 font-extrabold">
                <div>
                    <span ref="yearsAmount" class="text-ProjectPurple">--</span>
                    <h1 class="inline"> years</h1>
                </div>
                <div>
                    <span ref="monthsAmount" class="text-ProjectPurple">--</span>
                    <h1 class="inline"> months</h1>
                </div>
                <div>
                    <span ref="daysAmount" class="text-ProjectPurple">--</span>
                    <h1 class="inline"> days</h1>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            displayEmptyError: false,
            displayFutureDateError: false,
            displayDayError: false,
            dayInput: null,
            monthInput: null,
            yearInput: null,


        }
    },
    methods: {
        DisplayError() {
            this.displayEmptyError = true;
            setTimeout(() => {
                this.displayEmptyError = false;
            }, 3000)
        },
        DisplayFutureDateError() {
            this.displayFutureDateError = true;
            setTimeout(() => {
                this.displayFutureDateError = false;
            }, 3000)
        },
        SubmitForm() {
            // Of course there is some deviation in this algorithm it is just a showcase algo
            // that i dont want to bother too much just the functionalty is enough for me.
            if (!this.dayInput || !this.dayInput || !this.yearInput) {
                this.DisplayError();
                return;
            }
            /* I didnt want to do the folllowing 2 errors lol :p */
            // if (this.dayInput < 1 || this.dayInput > 31) {
            //     this.DisplayDayError();
            // }
            // if(this.monthInput < 1 || this.monthInput > 12){
            //     this.DisplayMonthError();
            // }
            const date = new Date(this.yearInput, this.monthInput, this.dayInput);
            const now = new Date();
            if (now < date) {
                this.DisplayFutureDateError();
                return;
            }
            var seconds = Math.floor((now - (date)) / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
            var months = Math.floor(days / 30);
            var years = Math.floor(days / 365);
            this.$refs.yearsAmount.innerText = years;
            var monthsLeft = months % 12;
            this.$refs.monthsAmount.innerText = monthsLeft;
            var daysLeft = days % 365;
            this.$refs.daysAmount.innerText = daysLeft;
        }
    }
}
</script>