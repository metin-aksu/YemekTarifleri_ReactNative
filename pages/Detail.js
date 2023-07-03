import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import useFetch from '../hooks/useFetch';

export default function Detail({route}) {
  const {loading, error, data} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`,
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  console.log(data.meals);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: data.meals[0].strMealThumb}}
          style={styles.image}
        />
        <Text style={styles.meal_name}>{data.meals[0].strMeal}</Text>
        <Text style={styles.meal_desc}>{data.meals[0].strInstructions}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
  meal_name: {
    padding: 5,
    fontSize: 28,
    color: 'maroon',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#DEDEDE',
  },
  meal_desc: {padding: 5, fontSize: 22, color: '#000'},
});
