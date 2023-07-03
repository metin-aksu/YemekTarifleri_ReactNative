import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

export default function MealsCard({meal, onSelect}) {
  // console.log(meal);
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image source={{uri: meal.strMealThumb}} style={styles.image} />
          <View style={styles.meal_view}>
            <Text style={styles.meal_name}>{meal.strMeal}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fea500',
    padding: 5,
  },
  inner_container: {
    backgroundColor: '#fea500',
    margin: 5,
    flexDirection: 'column',
    alignItems: 'center',
    height: 200,
    borderRadius: 10,
  },
  image: {
    width: Dimensions.get('window').width - 20,
    minHeight: 200,
    borderRadius: 10,
    // resizeMode: 'contain',
  },
  meal_name: {
    alignItems: 'center',
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  meal_view: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
