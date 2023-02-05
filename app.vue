<script lang="ts" setup>
  import { useTodoStore } from '~~/store/todo';

  const todoStore = useTodoStore();
  const newTodo = ref("")
  const error = ref(false)

  const saveNewTodo = () => {
    if(newTodo.value.length < 0) {
      error.value = true;
      return;
    }

    todoStore.add({
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
      <todo-list />
      <!-- <form @submit.prevent>
        <input type="text" class="py-2 px-4 border border-blue-200 focus:outline-blue-400 rounded" placeholder="Add a todo">
        <button class="transition-all duration-200 border border-blue-200 py-2 px-4 ml-3 hover:bg-blue-200 rounded">Add Todo</button>
      </form> -->
    </section>
  </main>
</template>
