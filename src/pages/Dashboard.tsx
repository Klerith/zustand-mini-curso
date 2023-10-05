import { WhiteCard } from '../components';

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Información general</p>
      <hr />

      <div className="grid">

        <WhiteCard>
          <h2>Hola Mundo</h2>
          <p>Información general</p>
        </WhiteCard>
      </div>

    </>
  );
};