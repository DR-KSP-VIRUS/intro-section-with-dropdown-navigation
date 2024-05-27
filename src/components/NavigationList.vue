<template>
    <div class="relative md:hidden py-8 px-4">
        <img src="/images/logo.svg" alt="logo">
        <img class=" absolute right-8 top-8 cursor-pointer" src="/images/icon-menu.svg" alt="">
    </div>
    <ul class="hidden pt-8 px-4 relative left-0 place-items-center text-medium-gray md:flex">
        <NavigationItem>
            <img src="/images/logo.svg" alt="logo">
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
            <a class="flex min-w-full place-items-center hover:text-almost-black pb-3" href="">Company
                <span class="ml-2">
                    <img class="arrow-up" src="/images/icon-arrow-up.svg" alt="arrow icon">
                    <img class="arrow-down" src="/images/icon-arrow-down.svg" alt=" arrow icon">
                </span>
            </a>
            <NestedNavItem>
                <NavigationItem class="my-2">
                    <a class="flex min-w-full hover:text-almost-black" href="">History</a>
                </NavigationItem>
                <NavigationItem class="my-2">
                    <a class="flex min-w-full hover:text-almost-black" href="">Our Team</a>
                </NavigationItem>
                <NavigationItem class="my-2">
                    <a class="flex min-w-full hover:text-almost-black" href="">Blog</a>
                </NavigationItem>
            </NestedNavItem>
        </NavigationItem>
        <NavigationItem>
            <a class="flex min-w-full hover:text-almost-black pb-3" href="">Careers</a>
        </NavigationItem>
        <NavigationItem>
            <a class="flex min-w-full hover:text-almost-black pb-3" href="">About</a>
        </NavigationItem>
        <div class="flex ml-auto">
            <NavigationItem>
                <a class="flex min-w-full hover:text-almost-black pb-3" href="">Login</a>
            </NavigationItem>
            <NavigationItem>
                <button class="border border-medium-gray hover:border-almost-black px-4 rounded-md">Register</button>
            </NavigationItem>
        </div>
    </ul>
</template>

<script setup>
import NestedNavItem from "./NestedNavItem.vue";
import NavigationItem from './NavigationItem.vue';
</script>

<style scoped>
</style>