// Dans notifications.js

import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { addDays } from 'date-fns';

export async function scheduleDailyNotification() {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();

    const trigger = Platform.OS === 'ios' ? { hour: 10, minute: 45, repeats: true } : { hour: 10, minute: 45, repeats: true };
    //const nextTriggerDate = addDays(new Date(), 1);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Daily Reminder',
        body: 'Don\'t forget to drink water today!',
      },
      trigger: trigger,
    });
  } catch (error) {
    console.error('Error scheduling notification: ', error);
  }
}

export async function registerForPushNotificationsAsync() {
  try {
    const { status } = await Notifications.requestPermissionsAsync();

    if (status === 'granted') {
      // Autorisations accordées, vous pouvez maintenant planifier la notification
      scheduleDailyNotification();
    } else {
      console.log('Notification permissions denied.');
    }
  } catch (error) {
    console.error('Error registering for notifications: ', error);
  }
}