
<template>
  <Modal :open="open" @close="$emit('close')">
    <template #icon>
      <font-awesome-icon icon="tasks" />
    </template>
    <template #title>
      {{isEdit ? 'Editar tarea' : 'Nueva tarea'}}
    </template>
    <template #content>
      <div class="flex flex-col gap-y-6">
        <Input name="name" label="Nombre*" v-model="name"/>
        <Textarea name="description" label="Descripción" v-model="description" />
        <Select name="difficulty" label="Dificultad" v-model="difficulty" :options="
          [
            { label: 'Fácil', value: '1' },
            { label: 'Normal', value: '2' },
            { label: 'Difícil', value: '3' },
            { label: 'Muy difícil', value: '4' },
          ]
        "/>
        <HorizontalRadioGroup name="type" v-model="type" :options="
          [
            { header: 'Tarea', subheader: 'Sólo se hará una vez en una fecha determinada.', value: 'task' },
            { header: 'Hábito', subheader: 'Se repite en determinados días de la semana.', value: 'habit' },
          ]
        "/>
        <div v-if="type === 'task'">
          <DatetimePicker name="singularDate" label="Fecha" v-model="singularDate" />
        </div>
        <div v-else-if="type === 'habit'" class="space-y-6">
          <DatetimePicker name="repeatedTime" label="Hora" time-picker v-model="repeatedTime" />
          <Multiselect
            name="daysOfWeek"
            label="Días de la semana"
            placeholder="Días de la semana"
            v-model="daysOfWeek"
            :options="
            [
              { label: 'Lunes', value: '1' },
              { label: 'Martes', value: '2' },
              { label: 'Miércoles', value: '3' },
              { label: 'Jueves', value: '4' },
              { label: 'Viernes', value: '5' },
              { label: 'Sábado', value: '6' },
              { label: 'Domingo', value: '7' },
            ]
            "
            />
        </div>
      </div>
    </template>
    <template #actions>
      <ButtonPrimary :disabled="!type || !name || type === 'habit' && !daysOfWeek.length" @click="submit">
        {{isEdit ? 'Editar tarea' : 'Crear tarea'}}
      </ButtonPrimary>
    </template>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import Modal from './Modal.vue'
import ButtonPrimary from './ButtonPrimary.vue'
import Input from './Input.vue'
import Textarea from "./Textarea.vue";
import Select from "./Select.vue";
import HorizontalRadioGroup from "./HorizontalRadioGroup.vue";
import DatetimePicker from "./DatetimePicker.vue";
import Multiselect from "./Multiselect.vue";
import { DaysOfWeek, Task, TaskFrequencyWeekly } from "@/utils/models";
import { useStore } from "vuex";
import { key } from "@/store";
import { addTask, updateTask } from "@/services/tasks";

export default defineComponent({
  name: 'EditTaskModal',
  props: {
    open: Boolean,
    task: Object as PropType<Task>,
  },
  emits: ['close'],
  components: {
    Modal,
    ButtonPrimary,
    Input,
    Textarea,
    Select,
    HorizontalRadioGroup,
    DatetimePicker,
    Multiselect
},
  setup: (props, context) => {
    const store = useStore(key)

    let isEdit = computed(() => !!props.task)
    let isTask = props.task?.frequency instanceof Date

    const name = ref(isEdit.value ? props.task?.title : '')
    const description = ref(isEdit.value ? props.task?.description : '')
    const difficulty = ref<('1' | '2' | '3' | '4')>(isEdit.value ? props.task?.difficulty?.toString() as ('1' | '2' | '3' | '4') : '1')
    const type = ref<'task' | 'habit' | ''>(isEdit.value ? (isTask ? 'task' : 'habit') : '')
    const singularDate = ref<Date>(((isEdit.value && isTask) ? props.task?.frequency : new Date()) as Date)
    const repeatedTime = ref<Date>((!isTask && isEdit.value) ? (props.task?.frequency as TaskFrequencyWeekly).time : new Date())
    const daysOfWeek = ref<string[]>((!isTask && isEdit.value) ? (props.task?.frequency as TaskFrequencyWeekly).daysOfWeek.map(val => val.toString()) : [])

    let user = computed(() => store.state.user)

    const submit = async () => {
      let req: Task = {
        title: name.value,
        description: description.value,
        difficulty: parseInt(difficulty.value) as (1 | 2 | 3 | 4),
        frequency: singularDate.value as Date,
        user: user.value.uid,
      }

      if (type.value === 'habit') {
        req.frequency = {
          daysOfWeek: daysOfWeek.value.map(val => parseInt(val)) as DaysOfWeek[],
          time: repeatedTime.value as Date,
        }
      }

      if (isEdit.value) {
        req.id = props.task?.id
        await updateTask(req)
      } else {
        await addTask(req)
      }

      
      context.emit('close')
    }

    return {
      name,
      description,
      difficulty,
      type,
      singularDate,
      repeatedTime,
      daysOfWeek,
      submit,
      isEdit,
    }
  }
})
</script>