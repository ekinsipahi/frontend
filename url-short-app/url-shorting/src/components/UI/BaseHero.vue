<template>
    <section class="mt-16">
        <div class="mx-auto flex max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <!-- Grid -->
            <div class="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div class="grid-item-reverse">
                    <h1
                        class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white w-2/3">
                        <span class="">More than just links</span>
                    </h1>
                    <p class="mt-3 text-lg text-gray-800 dark:text-gray-400 w-2/3">
                        Build your brand's recognition and get detailed insights
                        on how your links are performing.
                    </p>

                    <!-- Buttons -->
                    <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-p-cyan hover:bg-light-cyan-hover border border-transparent text-sm lg:text-base text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                            href="#">
                            Get started
                            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </a>
                    </div>
                    <!-- End Buttons -->
                </div>
                <!-- End Col -->

                <div class="relative ml-4">
                    <img class="w-full" src="../../assets/images/illustration-working.svg" alt="Image Description">
                    <div
                        class="absolute inset-0 -z-[1] w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0">
                    </div>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Hero -->
    </section>
</template>


<style>
.grid-item-reverse {
    grid-row: auto;
}

@media (max-width:768px) {
    .grid-item-reverse {
        grid-row: 2;
    }
}
</style>