import { useState } from "react";
import AccordionItem from "./accordionItem";
import posts from "./data";

const Accordion = () => {
  const [multiSelect, setMutiSelect] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelectInput = () => {
    setMutiSelect((prev) => !prev);
    setMultiple([]);
    setSelected(null);
  };

  const handleMultiSelect = (id) => {
    if (multiple.includes(id)) {
      setMultiple(multiple.filter((item) => item !== id));
    } else {
      setMultiple([...multiple, id]);
    }
  };
  return (
    <div className="p-5">
      <h1 className="text-center text-3xl mb-5">Accordion</h1>
      <div className="flex justify-center">
        <button
          onClick={handleMultiSelectInput}
          className="bg-gray-400 text-white mb-5 p-2 text-left flex justify-between text-xl cursor-pointer"
        >
          {multiSelect ? "Disable Multiselect" : "Enable Multiselect"}
        </button>
      </div>
      <div className="max-w-4xl mx-auto">
        {posts.map((post) => (
          <AccordionItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            show={
              multiSelect ? multiple.includes(post.id) : selected === post.id
            }
            onClick={
              multiSelect
                ? () => handleMultiSelect(post.id)
                : () => handleSingleSelect(post.id)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
