import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { EnviornmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import Load from '../components/Load';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { PlantProps } from '../libs/storage';

interface EnviornmentProps {
  key: string;
  title: string;
};

export function PlantSelect(){
  const [loading, setLoading] = useState(true);
  const [enviornments, setEnviornments] = useState<EnviornmentProps[]>([]);
  const [enviornmentSelected, setEnviornmentSelected] = useState('all');
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);

  const navigation = useNavigation();
  
  function handleEnviornmentSelected(enviornment: string){
    
    setEnviornmentSelected(enviornment);

    if(enviornment === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant => 
      plant.environments.includes(enviornment)
    );

    setFilteredPlants(filtered);
  }

  async function fetchPlants() {
    const { data } = await api
    .get(`plants?_sort=name&_order=asc&_page=${page}&_limite=8`);
    
    if(!data)
      return setLoading(true);

    if(page>1){
      setPlants(oldValues => [... oldValues, ... data])
      setFilteredPlants(oldValues => [... oldValues, ... data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number){
    if(distance<1)
      return;

      setLoadingMore(true);
      setPage(oldeValue => oldeValue + 1);
      fetchPlants();

  }

  function handlePlantSelect(plant: PlantProps){
    navigation.navigate('PlantSave', { plant });
  }

  useEffect(() => {
    async function fetchEnviornment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnviornments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    fetchEnviornment();

  },[]);

  useEffect(() => {
    fetchPlants();

  },[]);

  if(loading)
    return (<Load />);

  return (
    <View style={styles.container}>
      <Header />

      <View>
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          Você quer colocar sua planta?
        </Text>
      </View>

      <View>
        <FlatList
          data={enviornments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnviornmentButton 
              title={item.title}
              active={item.key === enviornmentSelected}  
              onPress={() => handleEnviornmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviornmentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList 
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary 
              data = {item} 
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => {
            handleFetchMore(distanceFromEnd);
          }}
          ListFooterComponent={
            loadingMore
            ? <ActivityIndicator color={colors.green} />
            : <Fragment /> 
          }
        />
      </View>

    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 32,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 25,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 20,
  },
  enviornmentList: {
    height: 40,
    justifyContent: 'center',
    marginVertical: 17
  },
  plants: {
    flex: 1,
    justifyContent: 'center'
  }
});
