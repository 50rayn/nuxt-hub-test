<template>
  <div class="event-container">
    <h2>Event Stream</h2>
    <p>Status: {{ status }}</p>
    <div v-if="status === 'CONNECTING'">
      Loading...
    </div>
    <div v-else-if="error">
      Error: {{ error }}
    </div>
    <div v-else>
      <pre>{{ data }}</pre>
    </div>
    <div class="event-actions">
      <button @click="close">
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, data, error, close } = useEventSource('/sse')
</script>
