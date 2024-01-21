import { WhiteCard } from '../../components';
import { BearType, useBearsStore } from '../../stores';

type Props = {
  incrementar: (type: BearType, by: number) => void;
  decrementar: (type: BearType, by: number) => void;
};

export const BearPage = () => {
  const increseBear = useBearsStore((state) => state.increaseBear);
  const decreaseBear = useBearsStore((state) => state.decreaseBear);
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BearBlack incrementar={increseBear} decrementar={decreaseBear} />

        <BearsPolar incrementar={increseBear} decrementar={decreaseBear} />

        <PandaBears incrementar={increseBear} decrementar={decreaseBear} />
      </div>
    </>
  );
};

function BearBlack({ incrementar, decrementar }: Props) {
  const bearBlack = useBearsStore((state) => state.bearBlack);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementar('bearBlack', +1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {bearBlack} </span>
        <button onClick={() => decrementar('bearBlack', 1)}>-1</button>
      </div>
    </WhiteCard>
  );
}

function BearsPolar({ incrementar, decrementar }: Props) {
  const bearsWhite = useBearsStore((state) => state.bearPolar);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementar('bearPolar', +1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {bearsWhite} </span>
        <button onClick={() => decrementar('bearPolar', 1)}>-1</button>
      </div>
    </WhiteCard>
  );
}

function PandaBears({ incrementar, decrementar }: Props) {
  const bearPanda = useBearsStore((state) => state.bearPanda);
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementar('bearPanda', 1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {bearPanda} </span>
        <button onClick={() => decrementar('bearPanda', 1)}>-1</button>
      </div>
    </WhiteCard>
  );
}
