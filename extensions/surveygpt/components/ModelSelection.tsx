'use client';

import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/getEngines').then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR('models', fetchModels);

  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'gpt-3.5-turbo',
  });

  return (
    <div
      className="mt-5
    "
    >
      <Select
        className="mt-2"
        placeholder={model}
        defaultValue={model}
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => 'bg-white border-white',
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
