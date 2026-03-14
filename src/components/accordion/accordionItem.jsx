const AccordionItem = ({ id, title, body, show, onClick }) => {
  return (
    <div>
      <div className="border border-gray-400 mb-2" key={id}>
        <button
          onClick={onClick}
          className="w-full bg-gray-400 text-white p-2 text-left flex justify-between text-xl cursor-pointer"
        >
          <span>{title}</span>
          <span className="text-2xl">{show ? "-" : "+"}</span>
        </button>
        {show && <p className="p-2">{body}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
