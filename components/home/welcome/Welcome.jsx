import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  const router = useRouter();
  const jobTypes = ['Full-time', 'Part-time', 'Contractor'];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Rumon</Text>
        <Text style={styles.welcomeMessage}>Job Finder or Stay Unemployed</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value=""
            onChange={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
