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

  const zachIsMeanToMe = (str) => {
    const strArray = str.split('');
    const strObj = strArray.reduce((obj, letter) => {
      obj[letter] = obj[letter] || 0;
      obj[letter]++;
      return obj;
    }, {});

    const supCode = {
      0: '\u2070',
      1: `\u00B9`,
      2: `\u00B2`,
      3: '\u00b3',
      4: `\u2074`,
      5: '\u2075',
      6: '\u2076',
      7: '\u2077',
      8: '\u2078',
      9: '\u2079',
    };

    const results = strArray.map((letter) => {
      const count = strObj[letter];
      const value = supCode[count];
      const supWord = `${letter}${value}`;

      return supWord;
    });

    return results.join('');
  };

  console.log(zachIsMeanToMe('balls'));

  return (
    <div className="text-center pt-20">
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
