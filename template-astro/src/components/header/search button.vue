<script setup>
import { ref, watch } from 'vue'

const searchModalEnabled = ref(false)

watch(searchModalEnabled, (value) => {
    const intent = value ? 'add' : 'remove'
    document.documentElement.classList[intent]('search-modal-enabled')
})
</script>

<template>
    <button
        class="w-10 h-10 sm:w-fit flex items-center justify-center px-2 gap-2 border rounded-lg transition duration-200 bg-light-500 dark:bg-dark-200 border-light-900 dark:border-dark-50"
    >
        <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="sm:w-4 sm:h-4"
        >
            <path
                d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
                fill="currentColor"
            />
        </svg>

        <span class="w-40 text-left hidden sm:block"> Search </span>

        <span
            class="border border-light-900 dark:border-dark-50 aspect-square h-2/3 rounded-md place-items-center hidden sm:grid"
        >
            /
        </span>
    </button>
</template>
