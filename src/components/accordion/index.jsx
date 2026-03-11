import { useState } from "react";
import AccordionItem from "./accordionItem";
import posts from "./data";

const Accordion = () => {
  const [multiSelect, setMultiSelect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelect = (id) => {
    const copyMutiple = [...multiple];
    const findIndex = copyMutiple.indexOf(id);
    if (findIndex === -1) {
      copyMutiple.push(id);
    } else {
      copyMutiple.splice(findIndex, 1);
    }

    setMultiple(copyMutiple);
  };

  return (
    <div className="w-full justify-start items-start">
      <div className="flex justify-center my-6">
        <button
          className="bg-gray-400 text-white p-2 text-xl cursor-pointer"
          onClick={() => {
            setMultiSelect((prev) => !prev);
            setSelected(null);
            setMultiple([]);
          }}
        >
          {multiSelect ? "Disable Multi Select" : "Enable Multi Select"}
        </button>
      </div>
      {posts.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          body={item.body}
          show={
            multiSelect
              ? multiple.indexOf(item.id) !== -1
              : selected === item.id
          }
          onClick={
            multiSelect
              ? () => handleMultiSelect(item.id)
              : () => handleSingleSelect(item.id)
          }
        />
      ))}
    </div>
  );
};

export default Accordion;
