<template>
    <header aria-label="Site Header" class="bg-white">
        <div class="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a class="block text-teal-600" href="/">
                <span class="sr-only">Home</span>
                <img src="../../assets/images/logo.svg" alt="shortly logo">
            </a>

            <div class="flex flex-1 items-center justify-end md:justify-between font-bold">
                <nav aria-label="Site Nav" class="hidden md:block">
                    <ul class="flex items-center gap-12 text-sm">
                        <li>
                            <a class="text-p-gray transition hover:text-p-grayish-violet" href="/">
                                About
                            </a>
                        </li>

                        <li>
                            <a class="text-p-gray transition hover:text-p-grayish-violet" href="/">
                                Careers
                            </a>
                        </li>

                        <li>
                            <a class="text-p-gray transition hover:text-p-grayish-violet" href="/">
                                History
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <a class="hidden rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-p-gray transition hover:text-p-grayish-violet md:block"
                            href="/">
                            Login
                        </a>
                        <a class="hidden rounded-full bg-p-cyan px-5 py-2.5 text-sm font-medium text-white transition duration-500 hover:bg-light-cyan-hover md:block"
                            href="/">
                            Sign up
                        </a>
                    </div>

                    <button @click="dropdown"
                        class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                        <span class="sr-only">Toggle menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
        <div class="flex md:hidden justify-end mr-10">
            <div class="absolute z-10">
                <div :class="{ flex: clicked, hidden: !clicked }" class="flex-col p-8 rounded-lg bg-p-dark-violet">
                    <a href="#">
                        <h1 class="text-white mb-4 text-center">Features</h1>
                    </a>
                    <a href="#">
                        <h1 class="text-white mb-4 text-center">Pricing</h1>
                    </a>
                    <a href="#">
                        <h1 class="text-white mb-4 text-center">Resources</h1>
                    </a>
                    <hr class="mb-4">
                    <a class="rounded-full mb-4 text-center px-5 py-2.5 text-sm font-medium text-p-gray transition hover:text-p-grayish-violet "
                        href="/">
                        Login
                    </a>
                    <a class="rounded-full bg-p-cyan text-center px-5 py-2.5 text-sm font-medium text-white transition duration-500 hover:bg-light-cyan-hover"
                        href="/">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            clicked: false,
        }
    },
    methods: {
        dropdown() {
            this.clicked = !this.clicked;
            console.log(this.clicked);
        }
    }
}
</script>