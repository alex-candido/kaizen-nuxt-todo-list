<script lang="ts" setup>

</script>

<template>
  <main class="min-h-screen pt-18 bg-gray-100">
    <section class="text-center py-10">
      <h1 class="text-5xl font-bold text-gray-700 mb-4">Login to your account</h1>

      <form class="flex flex-col max-w-lg mx-auto" @submit.prevent>
        <input 
          class="px-2 py-3 mt-3 border-1 border-lime-200"
          placeholder="Email Address"
          type="email"
          name="email"
          id="email"
        />
        <input
          class="px-2 py-3 mt-3 border-1 border-lime-200"
          placeholder="Password"
          type="password"
          name="password"
          id="password"
        /> 

        <input 
          class="px-2 py-3 mt-3 border-1 border-lime-200"
          placeholder="Re-enter your password"
          type="password"
          name="password-confirm"
          id="password-confirm"
        />

        <p v-if="false" class="text-red-400 mt-3">
          Error
        </p>
        <a 
          class="mt-3 underline cursor-pointer"
        >
          Login
        </a>
      </form>
    </section>
  </main>
</template>
