import React, { useEffect, useState } from 'react';
import moment from 'moment';

import '../style.css';

import Form from '../Form/Form';
import ItemList from '../ItemList/ItemList';
import ItemClass from '../ItemClass/ItemClass';

export default function Main() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ inputName: '', inputTimezone: '' });

  const currenttime = moment().format('HH:mm:ss');

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    // console.log('>> ' + value);
  };

  const handleSubmit = () => {
    // const formattedDate = formatDate(form.inputName);
    // const momentDate = moment(form.inputName, 'YYYY-MM-DD');
    // if (!momentDate.isValid()) return;
    // const date = momentDate.format('DD.MM.YYYY');
    // const date = momentDate.format('YYYY-MM-DD');
    // console.log(date, form.inputTimezone);

    setRecords((prevRecords) => [
      ...prevRecords,
      new ItemClass(form.inputName, Number(form.inputTimezone)),
    ]);

    setForm({ inputName: '', inputTimezone: '' });
  };

  const handleRemove = (id) => {
    setRecords((prevRecords) => prevRecords.filter((obj) => obj.id !== id));
  };

  return (
    <>
      <div className="baseTimeGMT"></div>
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <ItemList
        isChanged={false}
        records={records}
        time={currenttime}
        onRemove={handleRemove}
      />
    </>
  );
}
