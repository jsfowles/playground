import React from 'react';

const options = [
  { name: 'Zack', age: '28', gender: 'male' },
  { name: 'Jake', age: '41', gender: 'male' },
  { name: 'Jess', age: '36', gender: 'female' },
  { name: 'Zacks Mom', age: '66', gender: 'female' },
];

const Filter = () => {
  const [filter, setFilter] = React.useState<string>('all');

  const filteredOptions = React.useMemo(() => {
    if (!filter || filter === 'all') {
      return options;
    }
    if (filter !== 'all') {
      return options.filter((person) => person.gender === filter);
    }
  }, [filter]);

  const str = 'mississippi';
  const strArray = str.split('');
  const strObj = strArray.reduce((obj, letter) => {
    obj[letter] = obj[letter] || 0;
    obj[letter]++;
    return obj;
  }, {});

  const result = strArray.map((letter) =>
    Object.entries(strObj).map(([key, value]) => {
      console.log(key);
    })
  );

  return (
    <div className="text-center pt-20">
      <div className="flex justify-center">
        {strArray.map((letter) => (
          <div className="flex">
            {Object.entries(strObj).map(([key, value]) => {
              return (
                <>
                  {letter === key ? (
                    // <div className="flex">
                    //   <p className="uppercase">{key}</p>
                    //   <sup className="top-0">{value}</sup>
                    // </div>
                    <>{console.log(key, value)}</>
                  ) : null}
                </>
              );
            })}
          </div>
        ))}
      </div>
      <div className="pt-20">
        <h3>Gender</h3>
        <label>
          All
          <input
            type="radio"
            name="gender"
            value="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
        </label>
        <label>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={filter === 'male'}
            onChange={() => setFilter('male')}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={filter === 'female'}
            onChange={() => setFilter('female')}
          />
        </label>
      </div>
      <ul>
        {/*
        filter === 'all': return all
        person.gender === filter: return only genders that match filter.
        */}
        {filteredOptions.map((filteredPerson) => (
          <li key={filteredPerson.name}>{filteredPerson.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
