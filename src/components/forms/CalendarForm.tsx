import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {FormInput} from '../common';
import {CalendarData} from '../../types';
import {useTheme} from '../../contexts';

interface CalendarFormProps {
  data: CalendarData;
  onChange: (data: CalendarData) => void;
}

type DatePickerMode = 'start' | 'end' | null;

export const CalendarForm: React.FC<CalendarFormProps> = ({data, onChange}) => {
  const {colors, isDark} = useTheme();
  const [showDatePicker, setShowDatePicker] = useState<DatePickerMode>(null);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');

  const formatDate = (date: Date, allDay: boolean): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    if (!allDay) {
      options.hour = 'numeric';
      options.minute = '2-digit';
    }
    return date.toLocaleDateString('en-US', options);
  };

  const handleDateChange = (event: unknown, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(null);
    }

    if (selectedDate) {
      if (showDatePicker === 'start') {
        onChange({...data, startDate: selectedDate});
      } else if (showDatePicker === 'end') {
        onChange({...data, endDate: selectedDate});
      }
    }
  };

  const openDatePicker = (mode: DatePickerMode, dateOrTime: 'date' | 'time') => {
    setShowDatePicker(mode);
    setPickerMode(dateOrTime);
  };

  const buttonStyle = {
    backgroundColor: isDark ? colors.surface : colors.inputBackground,
    borderColor: isDark ? '#333' : colors.inputBorder,
  };

  return (
    <View style={styles.container}>
      <FormInput
        label="Event Title"
        placeholder="Meeting"
        value={data.title}
        onChangeText={title => onChange({...data, title})}
      />

      <FormInput
        label="Description"
        placeholder="Event description (optional)"
        value={data.description}
        onChangeText={description => onChange({...data, description})}
        multiline
        numberOfLines={3}
        style={styles.textArea}
      />

      <FormInput
        label="Location"
        placeholder="Event location (optional)"
        value={data.location}
        onChangeText={location => onChange({...data, location})}
      />

      <View style={styles.switchRow}>
        <Text style={[styles.label, {color: colors.text}]}>All Day Event</Text>
        <Switch
          value={data.allDay}
          onValueChange={allDay => onChange({...data, allDay})}
          trackColor={{false: '#555', true: colors.yellow}}
          thumbColor={colors.white}
        />
      </View>

      <View style={styles.dateContainer}>
        <Text style={[styles.label, {color: colors.text}]}>Start</Text>
        <View style={styles.dateButtonRow}>
          <TouchableOpacity
            style={[styles.dateButton, buttonStyle]}
            onPress={() => openDatePicker('start', 'date')}>
            <Text style={[styles.dateButtonText, {color: colors.text}]}>
              {formatDate(data.startDate, true)}
            </Text>
          </TouchableOpacity>
          {!data.allDay && (
            <TouchableOpacity
              style={[styles.timeButton, buttonStyle]}
              onPress={() => openDatePicker('start', 'time')}>
              <Text style={[styles.dateButtonText, {color: colors.text}]}>
                {data.startDate.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.dateContainer}>
        <Text style={[styles.label, {color: colors.text}]}>End</Text>
        <View style={styles.dateButtonRow}>
          <TouchableOpacity
            style={[styles.dateButton, buttonStyle]}
            onPress={() => openDatePicker('end', 'date')}>
            <Text style={[styles.dateButtonText, {color: colors.text}]}>
              {formatDate(data.endDate, true)}
            </Text>
          </TouchableOpacity>
          {!data.allDay && (
            <TouchableOpacity
              style={[styles.timeButton, buttonStyle]}
              onPress={() => openDatePicker('end', 'time')}>
              <Text style={[styles.dateButtonText, {color: colors.text}]}>
                {data.endDate.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={showDatePicker === 'start' ? data.startDate : data.endDate}
          mode={pickerMode}
          display="spinner"
          onChange={handleDateChange}
          textColor={colors.text}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '500',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateContainer: {
    marginBottom: 16,
  },
  dateButtonRow: {
    flexDirection: 'row',
    gap: 8,
  },
  dateButton: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
  },
  timeButton: {
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    minWidth: 100,
    alignItems: 'center',
  },
  dateButtonText: {
    fontSize: 14,
  },
});
