<script lang="ts" setup>
  import { useTodoStore } from '~~/store/todo';

  const todoStore = useTodoStore();
  const newTodo = ref("")
  const error = ref(false)

  watch(error, (value: boolean) => {
    if (value) {
      setTimeout(() => {
        error.value = false;
      }, 500);
    }
  });

  const saveNewTodo = async () => {
    if(!newTodo.value) {
      error.value = true;
      return;
    }

    await todoStore.add({
      label: newTodo.value,
    })

    newTodo.value = "";
    console.log(todoStore.items)
  }

</script> 

<template>
  <main class="min-h-screen bg-gray-100 pt-18">
    <section class="text-center pt-10">
      <h1 class="text-5xl font-bold text-gray-700">What are we doing today?</h1>
    </section>
    <section 
    class="w-8/12 md:mx-auto lg:w-6/12 py-4 rounded-lg"
    >
      <todo-input v-model="newTodo" @save="saveNewTodo" :error="error" />
      <todo-list :items="todoStore.getOrderedTodos.reverse()" />
    </section>
  </main>
</template>
