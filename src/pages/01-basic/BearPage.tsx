import { useShallow } from 'zustand/react/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../store';

export const BearPage = () => {



  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BlackBears />

        <PolarBears />

        <PandaBears />

        <BearDisplay />

      </div>

    </>
  );
};


export const BlackBears = () => {

  // const { blackBears, increaseBlackBears } = useBearStore( state => state );
  const increaseBlackBears = useBearStore( state => state.increaseBlackBears );
  const blackBears = useBearStore( state => state.blackBears );

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => increaseBlackBears( 1 ) } > +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> { blackBears } </span>
        <button onClick={ () => increaseBlackBears( -1 ) } >-1</button>
      </div>

    </WhiteCard>
  );
};

export const PolarBears = () => {

  // const { polarBears, increasePolarBears } = useBearStore( state => state );
  // const { polarBears, increasePolarBears } = useBearStore( useShallow( state => state ));
  const increasePolarBears = useBearStore( state => state.increasePolarBears );
  const polarBears = useBearStore( state => state.polarBears );

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => increasePolarBears( 1 ) } > +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> { polarBears } </span>
        <button onClick={ () => increasePolarBears( -1 ) } >-1</button>
      </div>

    </WhiteCard>
  );
};

export const PandaBears = () => {

  // const { pandaBears, increasePandaBears } = useBearStore( state => state );
  // const increasePandaBears = useBearStore( state => state.increasePandaBears );
  // const pandaBears = useBearStore( state => state.pandaBears );

  //! Principalmente el shallow es para comparar objectos
  const { pandaBears, increasePandaBears } = useBearStore( useShallow( state => ({ pandaBears: state.pandaBears, increasePandaBears: state.increasePandaBears }) ));

  return (
    <WhiteCard centered>
      <h2>Osos Panda</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => increasePandaBears( 1 ) } > +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> { pandaBears } </span>
        <button onClick={ () => increasePandaBears( -1 ) } >-1</button>
      </div>

    </WhiteCard>
  );
};


export const BearDisplay = () => {

  // const bears = useBearStore( state => state.bears );
  const bears = useBearStore( useShallow( state => state.bears ));
  const doNothing = useBearStore( state => state.doNothing );
  const addBear = useBearStore( state => state.addBear );
  const clearBears = useBearStore( state => state.clearBears );

  return (
    <WhiteCard>
      <h1>Osos</h1>
      <button onClick={ doNothing }>No hace nada</button>
      <button onClick={ addBear } className="mt-2">Agregar</button>
      <button onClick={ clearBears } className="mt-2">Borrar</button>

      <pre>
        { JSON.stringify( bears, null, 2)}
      </pre>


    
    </WhiteCard>
  )
}