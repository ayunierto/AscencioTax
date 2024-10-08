import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-paper-dropdown';
import {Calendar} from 'react-native-calendars';
import {Button, Chip, Text, useTheme} from 'react-native-paper';

const options = [
  {label: 'Lucia Ascencio', value: 'lucia'},
  {label: 'Yulier Rondon', value: 'yulier'},
];

export const BookingScreen = () => {
  const [staff, setStaff] = useState<string>();

  const [, setSelected] = useState('');

  const theme = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: theme.colors.primary}}>
      <Text
        variant="displaySmall"
        style={{...styles.title, color: theme.colors.onPrimary}}>
        Select your preferences
      </Text>
      <Dropdown
        label="Staff"
        placeholder="Select Staff"
        options={options}
        value={staff}
        onSelect={setStaff}
        menuContentStyle={{backgroundColor: theme.colors.onPrimary}}
      />
      <Calendar
        // Customize the appearance of the calendar
        onDayPress={(day: {dateString: React.SetStateAction<string>}) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          '2024-10-01': {selected: true, marked: true, selectedColor: 'blue'},
          '2024-10-02': {marked: true},
          '2024-10-03': {selected: true, marked: true, selectedColor: 'blue'},
        }}
      />

      <View style={styles.hours}>
        <Chip
          style={{backgroundColor: theme.colors.onPrimary}}
          icon="information"
          onPress={() => console.log('Pressed')}>
          07:00 a.m.
        </Chip>
        <Chip
          style={{backgroundColor: theme.colors.onPrimary}}
          icon="information"
          onPress={() => console.log('Pressed')}>
          08:00 a.m.
        </Chip>
        <Chip
          style={{backgroundColor: theme.colors.onPrimary}}
          icon="information"
          onPress={() => console.log('Pressed')}>
          09:00 a.m.
        </Chip>
        <Chip
          style={{backgroundColor: theme.colors.onPrimary}}
          icon="information"
          onPress={() => console.log('Pressed')}>
          10:00 a.m.
        </Chip>
        <Chip
          style={{backgroundColor: theme.colors.onPrimary}}
          icon="information"
          onPress={() => console.log('Pressed')}>
          11:00 a.m.
        </Chip>
        <Chip
          style={{backgroundColor: theme.colors.onPrimary}}
          icon="information"
          onPress={() => console.log('Pressed')}>
          12:00 p.m.
        </Chip>
      </View>
      <View>
        <Button mode="elevated">Book Now</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    gap: 20,
    height: '100%',
    paddingTop: 50,
  },
  title: {
    fontWeight: '300',
  },
  hours: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
  },
});

export default BookingScreen;
