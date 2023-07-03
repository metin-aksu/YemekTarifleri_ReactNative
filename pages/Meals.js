import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import useFetch from '../hooks/useFetch';
import MealsCard from '../components/MealsCard';

export default function Meals({navigation, route}) {
  const {loading, error, data} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.categoryName}`,
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

  const gotoDetailPage = (id, mealName) =>
    navigation.navigate('DetailScreen', {id, mealName});

  const renderMeals = ({item}) => (
    <MealsCard
      meal={item}
      onSelect={() => gotoDetailPage(item.idMeal, item.strMeal)}
    />
  );

  return (
    <FlatList
      data={data.meals}
      renderItem={renderMeals}
      keyExtractor={item => item.idMeal.toString()}
    />
  );
}
