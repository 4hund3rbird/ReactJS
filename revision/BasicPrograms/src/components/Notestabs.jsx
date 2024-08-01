import { useState } from "react";

const Notestabs = () => {
  const [notes, updatenotes] = useState([
    {
      title: "Hello",
      value: "Hi this is the first note click the '➕' icon above to add more!",
    },
    {
      title: "Holiday",
      value: "I really enjoyed my holiday hurrahhhh 🙂🙂🙂🙂🙂",
    },
  ]);
  const [addformopen, toggleaddform] = useState(false);
  const [currenttab, changetab] = useState(0);
  console.log(notes);
  console.log(currenttab);
  console.log(addformopen);
  function addnote(note) {
    updatenotes((notes) => {
      return [...notes, note];
    });
  }

  function removenote(index) {
    updatenotes((note) => {
      return note.filter((e, i) => i !== index);
    });
    console.log(notes);
  }
  return (
    <div className="border-2 p-4 ">
      <h1>Notes Tabs</h1>

      <div className="p-4 relative h-80 bg-slate-900 rounded-lg font-bold text-lg font-mono">
        <Tabsnav
          notes={notes}
          add={addnote}
          remove={removenote}
          addform={toggleaddform}
          changetab={changetab}
          currenttab={currenttab}
        />
        {addformopen && (
          <Addform
            changetab={changetab}
            addnote={addnote}
            toggle={toggleaddform}
          />
        )}
        <div className="py-4">
          <textarea
            value={notes[currenttab] ? notes[currenttab].value : ""}
            className="text-white w-full max-h-48 resize-none rounded-lg bg-slate-700  p-4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const Addform = ({ changetab, addnote, toggle }) => {
  const [note, updatenote] = useState({ title: "", value: "" });

  return (
    <div className="absolute w-full top-0 left-0 backdrop-blur-sm">
      <div className="bg-slate-900 p-6 rounded-lg m-auto w-fit h-70 border-2  l">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1>Add a new Note!</h1>
          <div className="py-2 ">
            <label htmlFor="title">Title: </label>
            <input
              className="p-1 bg-slate-600  rounded"
              type="text"
              name="title"
              value={note.title}
              onChange={(e) => {
                updatenote((note) => {
                  return { ...note, title: e.target.value };
                });
              }}
            />
          </div>
          <div className="py-2 ">
            <label htmlFor="note">Note: </label>
            <textarea
              className="p-1 bg-slate-600 w-full h-20 resize-none rounded"
              type="text"
              name="note"
              value={note.note}
              onChange={(e) => {
                updatenote((note) => {
                  return { ...note, value: e.target.value };
                });
              }}
            />
          </div>
          <div className="flex justify-between py-4">
            <button
              className="bg-red-600 px-4 rounded-full"
              onClick={() => {
                toggle(false);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-emerald-600 px-4 rounded-full"
              onClick={() => {
                toggle(false);
                changetab((i) => i + 1);
                addnote(note);
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Tabsnav = ({
  notes,
  addnote,
  remove,
  addform,
  changetab,
  currenttab,
}) => {
  return (
    <>
      <nav className="p-2 flex gap-2 duration-100 justify-evenly w-fit rounded-lg bg-slate-700">
        {notes &&
          notes.map((note, i) => {
            return (
              <div
                key={i}
                className={` gap-2 flex hover:bg-emerald-600 border-2 border-transparent duration-100 cursor-pointer ${
                  i === currenttab
                    ? "bg-emerald-600 border-emerald-700"
                    : "bg-gray-800"
                }  rounded-lg`}
              >
                <span className="p-2" onClick={() => changetab(i)}>
                  {note.title}
                </span>
                <span
                  className="cursor-pointer bg-slate-600 rounded-r-lg p-2  hover:bg-slate-500"
                  onClick={() => {
                    changetab(i - 1);

                    remove(i);
                  }}
                >
                  ❌
                </span>
              </div>
            );
          })}

        <button
          className="cursor-pointer bg-emerald-600 p-2 rounded-full"
          onClick={(e) => {
            addform(true);
          }}
        >
          ➕
        </button>
      </nav>
    </>
  );
};

export default Notestabs;
