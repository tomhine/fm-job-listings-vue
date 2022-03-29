<script setup lang="ts"></script>

<template>
  <TransitionGroup name="list">
    <slot></slot>
  </TransitionGroup>
</template>

<style>
.list-enter-active {
  transition: all 0.2s ease-in;
}
.list-leave-active {
  transition: all 0.2s ease-out;
  position: absolute;
}
.list-enter-from {
  transform: translateX(-100px);
  opacity: 0;
}
.list-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.list-move {
  transition: all 0.2s ease;
}
</style>
