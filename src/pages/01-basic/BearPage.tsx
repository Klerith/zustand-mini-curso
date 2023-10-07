import { WhiteCard } from '../../components';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-3 gap-2">

        <WhiteCard centered>
          <h2>Osos Negros</h2>

          <div>
            <button> +1</button>
            <span className="text-3xl mx-10"> 0 </span>
            <button>-1</button>
          </div>

        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Polares</h2>

          <div>
            <button> +1</button>
            <span className="text-3xl mx-10"> 0 </span>
            <button>-1</button>

          </div>

        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Pandas</h2>

          <div>
            <button> +1</button>
            <span className="text-3xl mx-10"> 0 </span>
            <button>-1</button>
          </div>

        </WhiteCard>




      </div>

    </>
  );
};