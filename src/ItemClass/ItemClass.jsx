import React from 'react';
import { nanoid } from 'nanoid';

// Класс элемента таблицы записей
export default class ItemClass {
  constructor(title, timezone, time) {
    this.id = nanoid();
    this.title = title;
    this.timezone = timezone;
    this.time = time;
  }
}
