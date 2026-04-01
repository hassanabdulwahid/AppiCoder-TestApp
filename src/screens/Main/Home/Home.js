import { FlatList, View, ActivityIndicator, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserCard from './UserCard';
import SkeletonCard from '../../../components/SkeletonCard';
import colors from '../../../themes/colors';

const PAGE_SIZE = 4;
const SKELETONS = Array.from({ length: PAGE_SIZE });
const CACHE_KEY = 'cached_users';

const Home = ({ navigation }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const loadCached = async () => {
    const cached = await AsyncStorage.getItem(CACHE_KEY);
    if (cached) {
      const data = JSON.parse(cached);
      setAllUsers(data);
      setUsers(data.slice(0, PAGE_SIZE));
      setLoading(false);
    }
  };

  const fetchUsers = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    try {
      const r = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await r.json();
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data)); 
      setAllUsers(data);
      setUsers(data.slice(0, PAGE_SIZE));
      setPage(1);
    } catch {
      await loadCached(); 
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const loadMore = () => {
    if (loadingMore || users.length >= allUsers.length) return;
    setLoadingMore(true);
    setTimeout(() => {
      const next = page + 1;
      setUsers(allUsers.slice(0, next * PAGE_SIZE));
      setPage(next);
      setLoadingMore(false);
    }, 800);
  };

  if (loading) return (
    <View>{SKELETONS.map((_, i) => <SkeletonCard key={i} />)}</View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} navigation={navigation} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchUsers(true)}
            tintColor={colors.primaryAccent}
            colors={[colors.primaryAccent]}
          />
        }
        ListFooterComponent={
          loadingMore
            ? <ActivityIndicator color={colors.primaryAccent} style={{ marginVertical: 16 }} />
            : <View style={{ height: 60 }} />
        }
      />
    </View>
  );
};

export default Home;

const styles = {
  container: { flex: 1, backgroundColor: colors.white },
};