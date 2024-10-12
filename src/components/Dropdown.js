import React from 'react';

const JournalDropdown = ({ journals, selectedJournal, onJournalSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Journal:
      </label>
      <select
        name="journal"
        value={selectedJournal}
        onChange={onJournalSelect}
        required
        className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          -- Select a Journal --
        </option>
        {journals.map((journal, index) => (
          <option key={index} value={journal}>
            {journal}
          </option>
        ))}
      </select>
    </div>
  );
};
const PaperIdDropdown = ({ paperData, selectedPaperId, onPaperSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Paper ID:
      </label>
      <select
        name="paperid"
        value={selectedPaperId}
        onChange={onPaperSelect}
        required
        className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          -- Select a Paper --
        </option>
        {paperData.map((item, index) => {
          if (item.status != 3) {
            return (
              <option key={index} value={item.paperID}>
                {item.paperID}
              </option>
            )
          }
        })}
      </select>
    </div>
  );
};

export  { JournalDropdown,PaperIdDropdown };
