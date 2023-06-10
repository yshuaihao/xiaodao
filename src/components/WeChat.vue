<template>
  <div class="chat-container">
    <div class="chat-header">WeChat</div>
    <div class="chat-messages">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div v-if="item.flag">
            <img src="robot.jpg" alt="image" class="chat-messages-robot" />
            <div class="chat-messages-left">{{ item.content }}</div>
          </div>
          <div v-else>
            <img src="user.png" alt="image" class="chat-messages-user" />
            <div class="chat-messages-right">{{ item.content }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat-input">
      <input type="text" v-model="msg" placeholder="Type your message..." />
      <button @click="handleClick">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { get } from '@/utils/request'
const list = ref([
  { content: 'Hello', flag: false },
  { content: 'Hello', flag: true }
])
const msg = ref('')

const handleClick = async () => {
  list.value.push({ content: msg.value, flag: false })
  try {
    const result: any = await get('/chat')
    list.value.push({ content: result.content, flag: true })
  } catch (e) {
    console.log('请求失败')
  }
}
</script>

<style lang="scss">
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
  height: 100px;
  background-color: #00b140;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.chat-messages {
  height: 800px;
  overflow-x: hidden;
  overflow-y: scroll;

  ul {
    padding: 0;
  }

  li {
    padding: 0 20px 0 20px;
    width: 90%;
    list-style: none;
    position: relative;
    min-height: 40px;
    display: block;
    margin-top: 20px;

    div {
      position: relative;
    }
  }

  li::after {
    content: '';
    display: table;
    clear: both;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  &-left {
    min-height: 40px;
    max-width: 280px;
    overflow-wrap: break-word;
    text-align: left;
    font-size: 15px;
    line-height: 24px;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #d8d8d8;
    color: #333;
    float: left;
    margin-left: 10px;
  }

  &-right {
    min-height: 40px;
    max-width: 280px;
    overflow-wrap: break-word;
    text-align: left;
    font-size: 15px;
    line-height: 24px;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #d8d8d8;
    color: #333;
    float: right;
    margin-right: 10px;
  }

  &-robot {
    float: left;
  }

  &-user {
    float: right;
  }
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-input {
  height: 80px;
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
