import { WhiteCard } from '../../components';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <WhiteCard centered>
          <h2>Osos Negros</h2>

          <div className="flex flex-col md:flex-row">
            <button> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> 0 </span>
            <button>-1</button>
          </div>

        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Polares</h2>

          <div className="flex flex-col md:flex-row">
            <button> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> 0 </span>
            <button>-1</button>

          </div>

        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Pandas</h2>

          <div className="flex flex-col md:flex-row">
            <button> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> 0 </span>
            <button>-1</button>
          </div>

        </WhiteCard>




      </div>

    </>
  );
};