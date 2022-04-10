
<template>
  <Modal :open="open" @close="$emit('close')">
    <template #icon>
      <font-awesome-icon icon="tasks" />
    </template>
    <template #title>
      {{isEdit ? 'Editar recompensa' : 'Nueva recompensa'}}
    </template>
    <template #content>
      <div class="flex flex-col gap-y-6">
        <Input name="name" label="Nombre*" v-model="name"/>
        <Input name="cost" label="Coste*" :model-value="cost?.toString()" @update:model-value="value => cost = parseInt(value, 10)" type="number"/>
      </div>
    </template>
    <template #actions>
      <ButtonPrimary :disabled="!name || !cost" @click="submit">
        {{isEdit ? 'Editar recompensa' : 'Crear recompensa'}}
      </ButtonPrimary>
    </template>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import Modal from './Modal.vue'
import ButtonPrimary from './ButtonPrimary.vue'
import Input from './Input.vue'
import { Reward } from "@/utils/models";
import { useStore } from "vuex";
import { key } from "@/store";
import { addReward, updateReward } from "@/services/rewards";

export default defineComponent({
  name: 'EditRewardModal',
  props: {
    open: Boolean,
    reward: Object as PropType<Reward>,
  },
  emits: ['close'],
  components: {
    Modal,
    ButtonPrimary,
    Input,
},
  setup: (props, context) => {
    const store = useStore(key)

    let isEdit = computed(() => !!props.reward)

    const name = ref(isEdit.value ? props.reward?.name : '')
    const cost = ref(isEdit.value ? props.reward?.cost : '0')

    let user = computed(() => store.state.user)

    const submit = async () => {
      let req: Reward = {
        name: name.value as string,
        cost: cost.value as number,
        user: user.value.uid,
      }

      if (isEdit.value) {
        req.id = props.reward?.id
        await updateReward(req)
      } else {
        await addReward(req)
      }
      
      context.emit('close')
    }

    return {
      name,
      cost,
      submit,
      isEdit,
    }
  }
})
</script>