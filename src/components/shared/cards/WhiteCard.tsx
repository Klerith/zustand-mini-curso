export const WhiteCard = () => {
  return (
    <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
      <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
        <h1 className="text-lg text-gray-700"> John Doe </h1>
        <h3 className="text-sm text-gray-400 "> Creative Director </h3>
        <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
    </div>
  );
};