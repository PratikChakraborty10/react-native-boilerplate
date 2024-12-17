import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { usePushNotifications } from '@/usePushNotification'

const Profile = () => {

  const { expoPushToken, notification } = usePushNotifications()

  const data = JSON.stringify(notification, undefined, 2 )

  return (
    <View className='h-screen w-full flex flex-col gap-6'>
      <View className='h-2/3 w-full bg-blue-600 p-4'>
        <View className='h-full w-full flex flex-col gap-6 p-8 mt-8'>
          <Text className='text-4xl font-medium text-white'>Welcome to React Native Notifications</Text>
          <Button title='Get Notification'></Button>
          <Text>Token: {expoPushToken?.data ?? ""}</Text>
          <Text>{data}</Text>
        </View>
        
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})