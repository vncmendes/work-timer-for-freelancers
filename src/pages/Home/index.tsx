import { useForm } from "react-hook-form";
import { Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"; // sintax usada quando a bibiliotéca não tem export default.
import { useState } from "react";

import {
  ButtonTimer,
  CountTimerContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Preecha o campo antes de começar"),
  minutesAmount: zod
    .number()
    .min(5, "O clico precisa ser no mínimo de 5 minutos.")
    .max(60, "O ciclo precisa ser no máximo de 60 minutos."),
});

// interface NewCycleProps {
//   task: string;
//   minutesAmount: number;
// }

type NewCycleProps = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleProps>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleProps) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    reset(); // volta os campos para os setados no defaultValues.
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  console.log(activeCycle);

  const task = watch("task"); // controled component.
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 01" />
            <option value="Projeto 02" />
            <option value="Projeto 03" />
            <option value="Café" />
          </datalist>

          <label htmlFor="minutesAmount">Duração</label>

          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos</span>
        </FormContainer>

        <CountTimerContainer>
          <p>0</p>
          <p>0</p>
          <Separator>:</Separator>
          <p>0</p>
          <p>0</p>
        </CountTimerContainer>

        <ButtonTimer disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </ButtonTimer>
      </form>
    </HomeContainer>
  );
}

// npm install react-rook-form (RRF); importar o useForm, e de dentro dele utilizar as funções necessárias como, register, handleSubmit, watch etc
// npm install zod, para a validação do formulário caso precise.
// npm i @hookform/resolvers; para fazer a integração do (RRF), com o zod.
// import { zodResolver } from "@hookform/resolvers/zod"; <-- a integração
// formState do useForm. console.log(formState.errors) para ver os erros.
// type NewCycleProps = zod.infer<typeof newCycleFormValidationSchema>;
// type; usado quando vai reutilizar alguma informação usada anteriormente.
// i typeof dentro do zod.infer<>, é usado pois vamos referenciar uma variavel JS dentro do TS.
