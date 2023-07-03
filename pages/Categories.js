import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import useFetch from '../hooks/useFetch';

import CategoriesCard from '../components/CategoriesCard';

export default function Categories({navigation}) {
  const {loading, error, data} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  const gotoMealsPage = (id, categoryName) =>
    navigation.navigate('MealsScreen', {id, categoryName});

  const renderCategories = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => gotoMealsPage(item.idCategory, item.strCategory)}
    />
  );

  return (
    <FlatList
      data={data.categories}
      renderItem={renderCategories}
      keyExtractor={item => item.idCategory.toString()}
    />
  );
}
