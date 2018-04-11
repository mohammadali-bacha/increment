import React from 'react';
import { Text, TouchableHighlight, Picker } from 'react-native';
import styles from './styles';

function renderItem({item}) {
    return (
      <TouchableHighlight underlayColor="#ccc" onPress={() => {
        console.log('pressed!');
      }} style={styles.list_item}>
        <Text key={item.key}>{item.name}</Text>
      </TouchableHighlight>
    );
}

function renderPickerItems(data) {
  return data.map((item) => {
    let val = item.name.toLowerCase();
    let id = (item.key) ? item.key : item.id;
    return (
      <Picker.Item key={id} label={item.name} value={id} />
    );
  });
}

function uniqid() {
  return Math.random().toString(36).substr(2, 9);
}

function getDate() {
  let datetime = new Date().toLocaleString();
  let date = datetime.substr(0, datetime.lastIndexOf(','));
  return date;
}

function lastWeeksDates () {
  let dates = [];
  for(let i = 0; i < 7; i++){
      let d = new Date();
      d.setDate(d.getDate() - i);
      let datetime = d.toLocaleString();
      let formatted_date = datetime.substr(0, datetime.lastIndexOf(','));
      dates.push(formatted_date);
  }

  return dates;
}

export { renderItem, renderPickerItems, uniqid, getDate, lastWeeksDates };