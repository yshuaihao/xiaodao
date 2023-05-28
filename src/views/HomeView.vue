<template>
  <div class="chat-container">
    <div class="chat-header">WeChat</div>
    <div class="chat-messages" id="chat-messages"></div>
    <div class="chat-input">
      <input type="text" id="message-input" placeholder="Type your message..." />
      <button id="send-button">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.chat-container {
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.chat-header {
  height: 50px;
  background-color: #00b140;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.chat-messages {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
}

.chat-input {
  height: 50px;
  display: flex;
  border-top: 1px solid #f0f0f0;
}

.chat-input input {
  flex-grow: 1;
  border: none;
  padding: 0 10px;
}

.chat-input button {
  width: 80px;
  background-color: #00b140;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
