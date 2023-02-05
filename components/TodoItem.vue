<script setup lang="ts">
  import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import { Todo, useTodoStore } from '~~/store/todo';

  const props = defineProps <{
    todo: Todo;
  }>();

  const todoStore = useTodoStore();
  const deleteTodo = (id: string) => todoStore.remove(id);

  const updateTodoDone = (todo: Todo) => {
    const currentState = todo.done;
    todoStore.update(todo.id, { done: !currentState })
  }

  const parsedDate = computed(() => {
    new Intl.DateTimeFormat("pt-BR").format(new Date(props.todo.createdAt))
  })
  
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