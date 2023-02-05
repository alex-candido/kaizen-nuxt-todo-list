<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import { Todo } from '~~/store/todo';


  const props = defineProps <{
    todo: Todo;
  }>();
  
</script>

<template>
  <div>
    <div class="max-w-10">
      <div class="max-w-10/12 overflow-hidden whitespace-nowrap text-ellipsis">
        <h1>{{ todo.label }}</h1>
        <!-- <p>{{ todo }}</p> -->
      </div>
    </div>
    <section class="flex items-center">
      <check-circle-icon />
      <x-circle-icon />
    </section>
  </div>
</template> 