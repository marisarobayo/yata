
<template>
  <div v-if="open">
    <Teleport to="body">
      <div class="fixed top-0 bottom-0 left-0 right-0 bg-zinc-500 bg-opacity-50 z-50" @click="$emit('close')">
        <div class="m-auto p-12 max-w-5xl">
          <div class="bg-white rounded-xl" @click.prevent.stop>
            <div class="pt-4 pb-4 px-12 border-b border-zinc-300 shadow-sm inline-flex w-full justify-between items-center text-2xl">
              <div>
                <span class="text-gray-600 mr-2">
                  <slot name="icon"></slot>
                </span>
                <span class="font-medium">
                  <slot name="title"></slot>
                </span>
              </div>
              <span class="text-zinc-400 hover:text-zinc-600 cursor-pointer text-xl" @click="$emit('close')">
                <font-awesome-icon icon="times" />
              </span>
            </div>
            <div class="pt-6 px-12 pb-6">
              <slot name="content"></slot>
            </div>
            <div class="pt-2 px-12 pb-4 flex justify-center">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Modal',
  props: {
    open: Boolean,
  },
  emits: ['close']
})
</script>