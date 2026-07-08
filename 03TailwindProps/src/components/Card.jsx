function Card(props) {
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">

     

      <div className="mb-4">

        <span className="inline-block px-3 py-1 text-xs font-medium uppercase bg-white text-black rounded-full mb-3">
          {props.username}
        </span>

        <h2 className="text-xl font-bold text-white mb-2">
          {props.title}
        </h2>

      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {props.description}
      </p>

      <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg">
        {props.btnText || 'visit me'}
      </button>

    </div>
  );
}

export default Card;