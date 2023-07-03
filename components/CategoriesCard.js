import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default function CategoriesCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image
            source={{uri: category.strCategoryThumb}}
            style={styles.image}
          />
          <Text style={styles.category_name}>{category.strCategory}</Text>
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
    backgroundColor: '#fff',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#DEDEDE',
    height: 110,
    borderTopStartRadius: 55,
    borderBottomStartRadius: 55,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  image: {width: 100, minHeight: 100, resizeMode: 'contain'},
  category_name: {marginLeft: 10, color: '#000', fontSize: 28},
});
