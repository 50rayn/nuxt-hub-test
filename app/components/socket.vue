<template>
  <div class="socket-container">
    <h2>WebSocket</h2>
    <p>Status: {{ status }}</p>
    <div v-if="status === 'CONNECTING'">
      Loading...
    </div>
    <div v-else-if="error">
      Error: {{ error }}
    </div>
    <p v-else>
      <pre>Data: {{ data }}</pre>
    </p>
    <div class="controls">
      <button @click="send('Hello')">
        Send Message
      </button>
      <button @click="open">
        Open Connection
      </button>
      <button @click="close">
        Close Connection
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, data, send, open, close, error } = useWebSocket('/ws', { heartbeat: true })
</script>
