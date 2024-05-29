<template>
    <div class="py-4 px-4 md:hidden">
        <img src="/images/logo.svg" alt="logo">
        <img @click="open=true" class="absolute right-4 top-4 cursor-pointer" src="/images/icon-menu.svg" alt="menu">
    </div>
    <div :class="open ? 'fixed top-0 bottom-0 bg-almost-black/50 left-0 right-0': 'md:hidden'"></div>
    <ul :class="open ? 'fixed px-4 pt-8 bg-white min-h-screen top-0 right-0     text-medium-gray font-sans': 'hidden text-medium-gray md:flex md:place-items-center md:px-4  md:relative md:min-h-0 md:pt-2 md:bg-almost-white'">
        <NavigationItem>
            <img class="hidden md:block" src="/images/logo.svg" alt="logo">
            <img @click="open=false" :class="open ? 'absolute top-4 right-4' :'md:hidden'" src="/images/icon-close-menu.svg" alt="close">
        </NavigationItem>
        <NavigationItem>
            <a class="flex min-w-full pb-3 place-items-center hover:text-almost-black" href="#">Features
                <span class="ml-2">
                    <img class="arrow-up" src="/images/icon-arrow-up.svg" alt="arrow icon">
                    <img class="arrow-down" src="/images/icon-arrow-down.svg" alt="arrow icon">
                </span>
            </a>
            <NestedNavItem>
                <NavigationItem class="flex my-2">
                    <a class="flex min-w-full hover:text-almost-black" href="#">
                        <img class="mr-2" src="/images/icon-todo.svg" alt="todo icon">
                    Todo List
                    </a>
                </NavigationItem>
                <NavigationItem class="flex my-2">
                    <a class="flex min-w-full hover:text-almost-black" href="">
                        <img class="mr-2" src="/images/icon-calendar.svg" alt="calendar icon">
                    Calendar
                    </a>
                </NavigationItem>
                <NavigationItem class="flex my-2">
                    <a class="flex min-w-full hover:text-almost-black" href="">
                        <img class="mr-2" src="/images/icon-reminders.svg" alt="reminders icon">
                    Reminders
                    </a>
                </NavigationItem>
                <NavigationItem class="flex my-2">
                    <a class="flex min-w-full hover:text-almost-black" href="">
                        <img class="mr-2" src="/images/icon-planning.svg" alt="planning icon">
                    Planning
                    </a>
                </NavigationItem>
            </NestedNavItem>
        </NavigationItem>
        <NavigationItem>
            <a class="flex min-w-full place-items-center pb-3" href="#">Company
                <span class="ml-2">
                    <img class="arrow-up" src="/images/icon-arrow-up.svg" alt="arrow icon">
                    <img class="arrow-down" src="/images/icon-arrow-down.svg" alt=" arrow icon">
                </span>
            </a>
            <NestedNavItem>
                <NavigationItem class="my-2">
                    <a class="flex min-w-full" href="#">History</a>
                </NavigationItem>
                <NavigationItem class="my-2">
                    <a class="flex min-w-full" href="#">Our Team</a>
                </NavigationItem>
                <NavigationItem class="my-2">
                    <a class="flex min-w-ful" href="#">Blog</a>
                </NavigationItem>
            </NestedNavItem>
        </NavigationItem>
        <NavigationItem>
            <a class="flex min-w-ful pb-3" href="#">Careers</a>
        </NavigationItem>
        <NavigationItem>
            <a class="flex min-w-full pb-3" href="#">About</a>
        </NavigationItem>
        <div class="flex flex-col place-items-center md:flex-row ml-auto">
            <NavigationItem>
                <a class="flex min-w-ful pb-3" href="#">Login</a>
            </NavigationItem>
            <NavigationItem>
                <button class="border border-medium-gray hover:border-almost-black  px-16 py-1 mb-3 rounded-xl md:px-4">Register</button>
            </NavigationItem>
        </div>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import NestedNavItem from "./NestedNavItem.vue";
import NavigationItem from './NavigationItem.vue';

const open = ref(false);
</script>

<style scoped>
</style>